import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartFacade, ProductsFacade, RouterFacade } from 'src/app/core/@ngrx';
import { Product } from 'src/app/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    products$: Observable<ReadonlyArray<Product>>;
    productsError$: Observable<Error | string>;

    @Input() editable: boolean;

    constructor(
        private productsFacade: ProductsFacade,
        private cartFacade: CartFacade,
        private routerFacade: RouterFacade,
    ) {
    }

    ngOnInit(): void {
        this.products$ = this.productsFacade.products$;
        this.productsError$ = this.productsFacade.productsError$;
    }

    onBuyProduct(product: Product): void {
        const availableCount = product.availableCount - 1;
        const productToBuy: Product = { ...product, availableCount };
        this.cartFacade.addProduct({ product: { ...product } });
        this.productsFacade.buyProduct({ product: productToBuy });
    }

    onGoToProduct(product: Product): void {
        const link = ['/product', product.id];
        this.routerFacade.goTo({ path: link });
    }

    onEditProduct(product: Product): void {
        const link = ['/admin/products/edit', product.id];
        this.routerFacade.goTo({ path: link });
    }

    onDeleteProduct(product: Product): void {
        const productToDelete: Product = { ...product };
        this.productsFacade.deleteProduct({ product: productToDelete });
    }
}
