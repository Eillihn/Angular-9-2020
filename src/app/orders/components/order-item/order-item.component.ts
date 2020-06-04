import { Component, Input, OnInit } from '@angular/core';

import { OrderModel } from 'src/app/core/models';

@Component({
    selector: 'app-order-item',
    templateUrl: './order-item.component.html',
    styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {
    @Input() order: OrderModel;

    constructor() {
    }

    ngOnInit(): void {
    }
}
