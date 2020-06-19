import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as RouterActions from './../router/router.actions';
import { NavigationExtras } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RouterFacade {

    constructor(private store: Store<AppState>) {
    }

    goTo(props: {
        path: any[];
        queryParams?: object;
        extras?: NavigationExtras;
    }) {
        this.store.dispatch(RouterActions.go(props));
    }
}
