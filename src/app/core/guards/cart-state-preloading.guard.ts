import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, take, tap } from 'rxjs/operators';

import { AppState, selectCartLoaded } from 'src/app/core/@ngrx';
import * as CartActions from 'src/app/core/@ngrx/cart/cart.actions';

@Injectable({
    providedIn: 'any'
})
export class CartStatePreloadingGuard implements CanActivate {
    constructor(private store: Store<AppState>) {
    }

    canActivate(): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    private checkStore(): Observable<boolean> {
        return this.store.pipe(
            select(selectCartLoaded),
            tap(loaded => {
                if (!loaded) {
                    this.store.dispatch(CartActions.getCartProducts());
                }
            }),
            take(1)
        );
    }
}
