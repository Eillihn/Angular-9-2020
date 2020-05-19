import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductModel } from 'src/app/core/models';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    products: ProductModel[];

    constructor(
        public productService: ProductsService,
        public cartService: CartService
    ) {}

    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }

    onBuyProduct(product: ProductModel): void {
        this.cartService.addProduct(product);
    }
}
