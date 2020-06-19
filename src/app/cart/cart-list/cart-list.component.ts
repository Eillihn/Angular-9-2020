import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { CartProduct } from 'src/app/core/models';
import { CartFacade } from 'src/app/core/@ngrx';

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
    cartProducts$: Observable<ReadonlyArray<CartProduct>>;
    totalQuantity$: Observable<number>;
    totalSum$: Observable<number>;
    sortForm = new FormControl();
    sortList: string[] = ['price', 'quantity', 'name'];
    sortDirection: boolean = false;

    constructor(private cartFacade: CartFacade) {
    }

    ngOnInit(): void {
        this.cartProducts$ = this.cartFacade.cartProducts$;
        this.totalQuantity$ = this.cartFacade.totalQuantity$;
        this.totalSum$ = this.cartFacade.totalSum$;
    }

    changeSortName(sortName): void {
        this.cartFacade.setSortName({ sortName });
    }

    changeDirection(): void {
        this.sortDirection = !this.sortDirection;
        this.cartFacade.setDirection({ sortDirection: this.sortDirection });
    }
}
