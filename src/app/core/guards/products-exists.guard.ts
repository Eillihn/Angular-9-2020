import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState, selectProductsData } from 'src/app/core/@ngrx';
import * as RouterActions from 'src/app/core/@ngrx/router/router.actions';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { checkProductsStore } from './check-products-store.function';

@Injectable({
    providedIn: 'root'
})
export class ProductExistsGuard implements CanActivate {
    constructor(private store: Store<AppState>) {
    }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return checkProductsStore(this.store).pipe(
            switchMap(() => {
                const id = route.paramMap.get('productID');
                return this.hasProduct(id);
            })
        );
    }

    private hasProduct(id: string): Observable<boolean> {
        return this.store.pipe(
            select(selectProductsData),
            map(products => !!products.find(product => product.id === id)),
            tap(result => {
                if (!result) {
                    this.store.dispatch(RouterActions.go({ path: ['/home'] }));
                }
            }),
            take(1)
        );
    }
}
