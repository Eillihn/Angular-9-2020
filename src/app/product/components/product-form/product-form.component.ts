import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { Location } from '@angular/common';

import {
    CanComponentDeactivate,
    Category,
    DialogService,
    ProductModel,
} from 'src/app/core';
import { ProductsService } from 'src/app/core/services';

@Component({
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent
    implements OnInit, CanComponentDeactivate, OnDestroy {
    product: ProductModel;
    originalProduct: ProductModel;
    Category = Category;
    private sub: Subscription;

    constructor(
        private productsService: ProductsService,
        private route: ActivatedRoute,
        private router: Router,
        private dialogService: DialogService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.data
            .pipe(pluck('product'))
            .subscribe((product: ProductModel) => {
                this.product = { ...product } as ProductModel;
                this.originalProduct = { ...product } as ProductModel;
            });
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    canDeactivate():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const flags = Object.keys(this.product).map((key) => {
            return this.originalProduct[key] === this.product[key];
        });
        if (flags.every((el) => el)) {
            return true;
        }
        return this.dialogService.confirm('Discard changes?');
    }

    onSave() {
        const method = this.product.id ? 'updateProduct' : 'createProduct';

        const observer = {
            next: (savedProduct: ProductModel) => {
                this.originalProduct = { ...savedProduct };
                this.onGoBack();
            },
            error: (err: any) => console.log(err),
        };
        this.sub = this.productsService[method](this.product).subscribe(
            observer
        );
    }

    onGoBack(): void {
        this.location.back();
    }

    compareCategories(o1: string, o2: string): boolean {
        return o1 === o2;
    }
}
