import {InjectionToken} from '@angular/core';

export const OrdersAPI = new InjectionToken<string>('OrdersAPI', {
    providedIn: 'any',
    factory: () => 'http://localhost:3000/orders',
});
