import { Injectable } from '@angular/core';
import { CartProductModel, ProductModel } from 'src/app/core/models';
import { ProductCommunicatorService } from './product-communicator/product-communicator.service';
import { LocalStorageService } from './local-storage/local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cartProducts: CartProductModel[] = [];
    totalQuantity: number = 0;
    totalSum: number = 0;

    constructor(
        public communicator: ProductCommunicatorService,
        public localStorageService: LocalStorageService
    ) {
        const cache =
            (this.localStorageService.getItem('CART_PRODUCTS') as []) || [];
        cache.forEach((el: CartProductModel) => {
            this.cartProducts.push(
                new CartProductModel(
                    el.product as ProductModel,
                    el.count as number
                )
            );
        });
        this.updateCartData();
    }

    addProduct(product: ProductModel): void {
        let cartProduct = this.cartProducts.find(
            (o) => o.product.id === product.id
        );
        if (cartProduct) {
            cartProduct.count++;
        } else {
            cartProduct = new CartProductModel(product, 1);
            this.cartProducts.push(cartProduct);
        }
        cartProduct.product.availableCount--;
        this.communicator.publishData(product);
        this.updateCartData();
    }

    removeProduct(cartProduct: CartProductModel): void {
        cartProduct.product.availableCount += cartProduct.count;
        this.cartProducts.splice(
            this.cartProducts.findIndex((o) => o === cartProduct),
            1
        );
        this.communicator.publishData(cartProduct.product);
        this.updateCartData();
    }

    increaseQuantity(cartProduct: CartProductModel): void {
        cartProduct.count++;
        cartProduct.product.availableCount--;
        this.communicator.publishData(cartProduct.product);
        this.updateCartData();
    }

    decreaseQuantity(cartProduct: CartProductModel): void {
        cartProduct.count--;
        cartProduct.product.availableCount++;
        this.communicator.publishData(cartProduct.product);
        this.updateCartData();
    }

    removeAllProducts(): void {
        this.cartProducts = [];
        this.updateCartData();
    }

    buyAllProducts(): void {
        this.cartProducts = [];
        this.localStorageService.setItem('CART_PRODUCTS', this.cartProducts);
    }

    hasCartProducts(): boolean {
        return this.cartProducts.length > 0;
    }

    updateCartData(): void {
        this.totalQuantity = this.cartProducts.reduce(
            (prev, cur) => prev + cur.count,
            0
        );
        this.totalSum = this.cartProducts.reduce(
            (prev, cur) => prev + cur.getTotal(),
            0
        );
        this.localStorageService.setItem('CART_PRODUCTS', this.cartProducts);
    }
}
