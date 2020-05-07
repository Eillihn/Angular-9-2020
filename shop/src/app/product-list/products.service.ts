import { Injectable } from '@angular/core';
import { Product } from './../product/product.module';
import { Category } from './../product/product-category.model';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor() {}

    getProducts(): Product[] {
        return [
            new Product(1, 'Name 1', 'Description 1', 1, true, Category.C1),
            new Product(2, 'Name 2', 'Description 2', 2, true, Category.C2),
            new Product(3, 'Name 3', 'Description 3', 3, true, Category.C1),
        ];
    }
}
