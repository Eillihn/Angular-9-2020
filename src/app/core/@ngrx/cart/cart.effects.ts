import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { concatMap, map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as CartActions from './cart.actions';
import { CartService } from '../../services';
import { selectCartState } from './cart.selectors';
import { AppState } from '../app.state';

@Injectable()
export class CartEffects {

    getCartProducts$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.getCartProducts),
            switchMap(action => of(CartActions.getCartProductsSuccess({ cartProducts: this.cartService.getStorageData() })))
        ));

    saveCartProducts$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.addProduct,
                CartActions.removeProduct,
                CartActions.increaseQuantity,
                CartActions.decreaseQuantity,
                CartActions.buyAllProducts),
            withLatestFrom(this.store.select(selectCartState)),
            map(([, state]) => {
                this.cartService.updateStorageData([...state.data]);
            }),
            concatMap(() => of(CartActions.saveCartProductsSuccess()))
        ));

    constructor(private actions$: Actions,
                private cartService: CartService,
                private store: Store<AppState>) {
        console.log('[CART EFFECTS]');
    }
}
