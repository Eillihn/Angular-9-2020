import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    products: ProductModel[] = []; // ProductModel - не содержит купленого количества. Обычно в магазинах разрешают купить несколько шт товара. Пока этого не требуется, но подумать над этим можно.

    constructor() {
    }

    getProducts(): ProductModel[] {
        return [...this.products];
    }

    addProduct(product: ProductModel) {
        this.products.push(product);
    }
}
