import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { Order, OrderStatus } from 'src/app/core/models';
import { CartFacade, CartState } from 'src/app/core/@ngrx';
import { Observable } from 'rxjs';
import { EntityCollectionService, EntityServices } from '@ngrx/data';

@Component({
    selector: 'app-process-order',
    templateUrl: './process-order.component.html',
    styleUrls: ['./process-order.component.scss'],
})
export class ProcessOrderComponent implements OnInit {
    cartState$: Observable<CartState>;
    private ordersService: EntityCollectionService<Order>;

    constructor(entityServices: EntityServices, private cartFacade: CartFacade) {
        this.ordersService = entityServices.getEntityCollectionService('Order');
    }

    ngOnInit(): void {
        this.cartState$ = this.cartFacade.cartState$;
    }

    onMakeOrder(): void {
        this.cartState$.pipe(take(1)).subscribe((cartState: CartState) => {
            const order = {
                id: '' + new Date().getTime(),
                date: new Date(),
                status: OrderStatus.OPEN,
                cartProducts: { ...cartState.data },
                totalQuantity: cartState.totalQuantity,
                total: cartState.totalSum
            } as Order;
            this.ordersService.add(order);
            this.cartFacade.buyAllProducts();
            alert('Your order has been accepted');
        });
    }
}
