import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/@ngrx';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { checkProductsStore } from './check-products-store.function';

@Injectable({
    providedIn: 'root'
})
export class ProductsStatePreloadingGuard implements CanActivate {
    constructor(private store: Store<AppState>) {
    }

    canActivate(): Observable<boolean> {
        return checkProductsStore(this.store).pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }
}

