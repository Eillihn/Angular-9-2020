import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, take, tap } from 'rxjs/operators';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { Order } from '../models';

@Injectable({
    providedIn: 'any'
})
export class OrdersStatePreloadingGuard implements CanActivate {
    private ordersService: EntityCollectionService<Order>;

    constructor(entityServices: EntityServices) {
        this.ordersService = entityServices.getEntityCollectionService('Order');

    }

    canActivate(): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    private checkStore(): Observable<boolean> {
        return this.ordersService.loaded$.pipe(
            tap(loaded => {
                if (!loaded) {
                    this.ordersService.getAll();
                }
            }),
            take(1)
        );
    }
}
