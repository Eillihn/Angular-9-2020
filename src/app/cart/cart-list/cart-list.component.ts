import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ProductOrderModel } from 'src/app/core/models';
import { CartService, ProductCommunicatorService } from 'src/app/core/services';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
    displayedColumns: string[] = [
        'Id',
        'Name',
        'Description',
        'Category',
        'Price',
        'Count',
        'Actions',
    ];
    orders: ProductOrderModel[];
    private sub: Subscription;

    constructor(public cartService: CartService) {}

    ngOnInit(): void {
        this.orders = this.cartService.getOrders();
    }

    hasProducts(): boolean {
        return this.cartService.hasProducts();
    }

    getProductsCount(): number {
        return this.cartService.getProductsCount();
    }

    getTotal(): number {
        return this.cartService.getTotal();
    }
}
