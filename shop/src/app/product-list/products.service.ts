import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';
import { Category } from 'src/app/core/models/product-category.model';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor() {
    }

    getProducts(): ProductModel[] {
        return [
            {id: 1, name: 'Name 1', description: 'Description 1', price: 1, isAvailable: true, category: Category.C1},
            {id: 2, name: 'Name 2', description: 'Description 2', price: 2, isAvailable: true, category: Category.C2},
            {id: 3, name: 'Name 3', description: 'Description 3', price: 3, isAvailable: true, category: Category.C1},
        ];
    }
}
