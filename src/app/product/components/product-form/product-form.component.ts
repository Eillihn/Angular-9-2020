import { Component, OnDestroy, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';

import { CanComponentDeactivate, Category, DialogService, Product } from 'src/app/core';
import { ProductsFacade, RouterFacade } from 'src/app/core/@ngrx';

@Component({
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent
    implements OnInit, CanComponentDeactivate, OnDestroy {
    product: Product;
    Category = Category;
    private componentDestroyed$: Subject<void> = new Subject<void>();

    constructor(
        private dialogService: DialogService,
        private productsFacade: ProductsFacade,
        private routerFacade: RouterFacade
    ) {
    }

    ngOnInit(): void {
        this.productsFacade.selectedProductByUrl$
            .pipe(take(1))
            .subscribe((product: Product) => {
                this.product = { ...product } as Product;
            });
    }

    ngOnDestroy(): void {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }

    canDeactivate():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const flags = [];
        return this.productsFacade.selectedProductsOriginalProduct$.pipe(
            switchMap(originalProduct => {
                for (const key in originalProduct) {
                    if (originalProduct[key] === this.product[key]) {
                        flags.push(true);
                    } else {
                        flags.push(false);
                    }
                }

                if (flags.every(el => el)) {
                    return of(true);
                }
                return this.dialogService.confirm('Discard changes?');
            })
        );
    }

    onSave() {
        const product = { ...this.product } as Product;
        this.productsFacade.setOriginalProduct({ product });
        if (product.id) {
            this.productsFacade.updateProduct({ product });
        } else {
            this.productsFacade.createProduct({ product });
        }
    }

    onGoBack(): void {
        this.routerFacade.goTo({ path: ['/admin/products'] });
    }

    compareCategories(o1: string, o2: string): boolean {
        return o1 === o2;
    }
}
