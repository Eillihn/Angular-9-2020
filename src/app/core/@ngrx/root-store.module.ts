import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { EntityStoreModule } from './data/entity-store.module';
import { routerReducers, CustomSerializer, RouterEffects } from './router';
import { environment } from 'src/environments/environment';
import { ProductsStoreModule } from './products/products-store.module';
import { CartStoreModule } from './cart/cart-store.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot(routerReducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                strictStateSerializability: true,
                strictActionSerializability: false,
                strictActionWithinNgZone: true
            }
        }),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            serializer: CustomSerializer
        }),
        EffectsModule.forRoot([RouterEffects]),
        ProductsStoreModule,
        CartStoreModule,
        EntityStoreModule,
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ]
})
export class RootStoreModule {
}
