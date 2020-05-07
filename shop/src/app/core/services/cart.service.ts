import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    products: ProductModel[] = [];

    constructor() {
    }

    getProducts(): ProductModel[] {
        return [...this.products];
    }

    addProduct(product: ProductModel) {
        this.products.push(product);
    }
}
