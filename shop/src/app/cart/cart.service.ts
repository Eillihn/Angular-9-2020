import { Injectable } from '@angular/core';
import { Product } from './../product/product.module';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    constructor() {
        localStorage.setItem('CART_PRODUCTS', JSON.stringify([]));
    }

    getProducts(): Product[] {
        return JSON.parse(localStorage.getItem('CART_PRODUCTS'));
    }

    addProduct(product: Product) {
        const products = this.getProducts() || [];
        products.push(product);
        localStorage.setItem('CART_PRODUCTS', JSON.stringify(products));
    }
}
