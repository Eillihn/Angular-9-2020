import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {CartModule} from './cart/cart.module';
import {ProductModule} from './product/product.module';
import {OrdersModule} from './orders/orders.module';
import {AdminModule} from './admin/admin.module';
import {TimingInterceptor} from 'src/app/core/interceptors';

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        CartModule,
        ProductModule,
        OrdersModule,
        LayoutModule,
        AdminModule,

        AppRoutingModule,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TimingInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent],
})
export class AppModule {
}

