import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CartProductModel, OrderModel, OrderStatus } from 'src/app/core/models';
import { OrdersAPI } from './orders.config';

@Injectable({
    providedIn: 'root',
})
export class OrderService {
    constructor(
        private http: HttpClient,
        @Inject(OrdersAPI) private ordersUrl: string,
    ) {}

    createOrder(
        cartProducts: CartProductModel[],
        totalQuantity: number,
        total: number
    ): Promise<OrderModel> {
        const order = {
            id: '' + new Date().getTime(),
            date: new Date(),
            status: OrderStatus.OPEN,
            cartProducts: { ...cartProducts },
            totalQuantity,
            total,
        } as OrderModel;
        const url = this.ordersUrl;
        const body = JSON.stringify(order);
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };
        return this.http
            .post(url, body, options)
            .toPromise()
            .then((response) => response as OrderModel)
            .catch(this.handleError);
    }

    getOrders(): Promise<OrderModel[]> {
        return this.http
            .get(this.ordersUrl)
            .toPromise()
            .then((response) => {
                return response as OrderModel[];
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
