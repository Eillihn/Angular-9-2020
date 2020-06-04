import { Component, OnInit } from '@angular/core';
import { CartService, OrderService } from 'src/app/core/services';

@Component({
    selector: 'app-process-order',
    templateUrl: './process-order.component.html',
    styleUrls: ['./process-order.component.scss'],
})
export class ProcessOrderComponent implements OnInit {
    constructor(
        public orderService: OrderService,
        public cartService: CartService
    ) {
    }

    ngOnInit(): void {
    }

    onMakeOrder(): void {
        this.orderService.createOrder(
            this.cartService.cartProducts,
            this.cartService.totalQuantity,
            this.cartService.totalSum
        );
        this.cartService.buyAllProducts();
        alert('Your order has been accepted');
    }
}
