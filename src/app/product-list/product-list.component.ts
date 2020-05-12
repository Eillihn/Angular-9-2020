import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    products: ProductModel[];

    constructor(public productService: ProductsService) {
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }
}
