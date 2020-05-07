import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './../product/product.module';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    products: Product[];

    constructor(public productService: ProductsService) {}

    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }
}
