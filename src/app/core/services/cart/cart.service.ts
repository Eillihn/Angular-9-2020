import { Injectable } from '@angular/core';
import { ProductOrderModel, ProductModel } from 'src/app/core/models';
import { ProductCommunicatorService } from './../product-communicator/product-communicator.service';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    orders: ProductOrderModel[] = [];

    constructor(public communicator: ProductCommunicatorService) {}

    getOrders(): ProductOrderModel[] {
        return this.orders;
    }

    addOrder(product: ProductModel): void {
        const order = this.orders.find((o) => o.product.id === product.id);
        if (order) {
            order.count++;
        } else {
            this.orders.push(new ProductOrderModel(product, 1));
        }
        this.communicator.publishData(product);
    }

    addProduct(order: ProductOrderModel): void {
        if (this.orders.indexOf(order) > -1) {
            order.count++;
            order.product.availableCount--;
        } else {
            this.orders.push(order);
        }
        this.communicator.publishData(order.product);
    }

    clearProducts(order: ProductOrderModel): void {
        order.product.availableCount += order.count;
        this.orders.splice(
            this.orders.findIndex((o) => o === order),
            1
        );
        this.communicator.publishData(order.product);
    }

    removeProduct(order: ProductOrderModel): void {
        order.count--;
        order.product.availableCount++;
        this.communicator.publishData(order.product);
    }

    hasProducts(): boolean {
        return this.getProductsCount() > 0;
    }

    getProductsCount(): number {
        return this.orders.reduce((prev, cur) => prev + cur.count, 0);
    }

    getTotal(): number {
        return this.orders.reduce((prev, cur) => prev + cur.getTotal(), 0);
    }
}
