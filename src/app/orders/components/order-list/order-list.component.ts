import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services';
import { OrderModel } from 'src/app/core/models';

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
    orders: OrderModel[];

    constructor(public orderService: OrderService) {
    }

    ngOnInit(): void {
        this.orders = this.orderService.orders;
    }
}
