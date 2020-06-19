import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Product } from 'src/app/core/models';
import { ProductsFacade } from 'src/app/core/@ngrx';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
    @Input() product: Product = {} as Product;
    private componentDestroyed$: Subject<void> = new Subject<void>();

    constructor(private productsFacade: ProductsFacade) {
    }

    ngOnInit(): void {
        this.productsFacade.selectedProductByUrl$
            .pipe(takeUntil(this.componentDestroyed$))
            .subscribe((product: Product) => {
                this.product = { ...product } as Product;
            });
    }

    ngOnDestroy(): void {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
}
