import { Component, OnInit } from '@angular/core';

import { CartProductModel } from 'src/app/core/models';
import { CartService } from 'src/app/core/services';

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
    cartProducts: CartProductModel[];

    constructor(public cartService: CartService) {}

    ngOnInit(): void {
        this.cartProducts = this.cartService.cartProducts;
    }

    getTotalQuantity(): number {
        return this.cartService.totalQuantity;
    }

    getTotalSum(): number {
        return this.cartService.totalSum;
    }
}
