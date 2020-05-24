import { Injectable } from '@angular/core';

import { ProductModel } from 'src/app/core/models/product.model';
import { Category } from 'src/app/core/models/product-category.model';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    data: ProductModel[] = [
        new ProductModel(1, 'Name 1', 'Description 1', 10, Category.C1, 5),
        new ProductModel(2, 'Name 2', 'Description 2', 20, Category.C2, 2),
        new ProductModel(3, 'Name 3', 'Description 3', 30, Category.C1, 1),
    ];
    constructor() {}

    getProducts(): Promise<ProductModel[]> {
        return <Promise<ProductModel[]>>new Promise((resolve) => {
            resolve(this.data);
        }).catch((error) => error);
    }
}
