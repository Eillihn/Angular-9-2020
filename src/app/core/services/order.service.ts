import { Injectable } from '@angular/core';
import { CartProductModel, OrderModel, OrderStatus } from 'src/app/core/models';
import { CartService } from './cart.service';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    orders: OrderModel[] = [];

    constructor(public cartService: CartService) {
    }

    createOrder(
        cartProducts: CartProductModel[],
        totalQuantity: number,
        total: number
    ) {
        this.orders.push({
            id: '' + new Date().getTime(),
            date: new Date(),
            status: OrderStatus.OPEN,
            cartProducts: {...cartProducts},
            totalQuantity,
            total,
        } as OrderModel);
    }
}
