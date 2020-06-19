import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectCartData, selectCartState, selectTotalQuantity, selectTotalSum } from './cart.selectors';
import * as CartActions from './cart.actions';

import { Observable } from 'rxjs';

import { CartProduct, Product } from 'src/app/core';
import { CartState } from './cart.state';

@Injectable({
    providedIn: 'root'
})
export class CartFacade {
    cartProducts$: Observable<ReadonlyArray<CartProduct>>;
    totalQuantity$: Observable<number>;
    totalSum$: Observable<number>;
    cartState$: Observable<CartState>;

    constructor(private store: Store<AppState>) {
        this.cartProducts$ = this.store.pipe(select(selectCartData));
        this.totalQuantity$ = this.store.pipe(select(selectTotalQuantity));
        this.totalSum$ = this.store.pipe(select(selectTotalSum));
        this.cartState$ = this.store.pipe(select(selectCartState));
    }


    addProduct(props: { product: Product }) {
        this.store.dispatch(CartActions.addProduct(props));
    }

    removeProduct(props: { cartProduct: CartProduct }) {
        this.store.dispatch(CartActions.removeProduct(props));
    }

    increaseQuantity(props: { cartProduct: CartProduct }) {
        this.store.dispatch(CartActions.increaseQuantity(props));
    }

    decreaseQuantity(props: { cartProduct: CartProduct }) {
        this.store.dispatch(CartActions.decreaseQuantity(props));
    }

    buyAllProducts() {
        this.store.dispatch(CartActions.buyAllProducts());
    }

    setSortName(props: { sortName: string }) {
        this.store.dispatch(CartActions.setSortName(props));
    }

    setDirection(props: { sortDirection: boolean }) {
        this.store.dispatch(CartActions.setDirection(props));
    }
}
