import { Injectable } from '@angular/core';
import { CartProductModel, ProductModel } from 'src/app/core/models';
import { ProductCommunicatorService } from 'src/app/core/services/product-communicator/product-communicator.service';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cartProducts: CartProductModel[] = [];
    totalQuantity: number = 0;
    totalSum: number = 0;

    constructor(public communicator: ProductCommunicatorService) {
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

    updateCartData(): void {
        this.totalQuantity = this.cartProducts.reduce(
            (prev, cur) => prev + cur.count,
            0
        );
        this.totalSum = this.cartProducts.reduce(
            (prev, cur) => prev + cur.getTotal(),
            0
        );
    }
}
