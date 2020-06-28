import { Injectable } from '@angular/core';
import { CartProduct, Product } from 'src/app/core/models';
import { LocalStorageService } from './local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class CartService {

    constructor(private localStorageService: LocalStorageService) {
    }

    getStorageData(): CartProduct[] {
        const data = [];
        const cache = this.localStorageService.getItem('CART_PRODUCTS') as [] || [];
        cache.forEach((el: CartProduct) => {
            data.push({
                product: el.product as Product,
                count: el.count as number,
            } as CartProduct);
        });
        return data;
    }

    updateStorageData(cartProducts: CartProduct[]): void {
        this.localStorageService.setItem('CART_PRODUCTS', cartProducts);
    }
}
