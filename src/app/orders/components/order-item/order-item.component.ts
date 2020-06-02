import { Component, OnInit, Input } from '@angular/core';

import { OrderModel, OrderStatus } from 'src/app/core/models';
@Component({
    selector: 'app-order-item',
    templateUrl: './order-item.component.html',
    styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {
    @Input() order: OrderModel;
    OrderStatus: OrderStatus;

    constructor() {}

    ngOnInit(): void {}
}
