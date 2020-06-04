import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { OrdersModule } from './orders/orders.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CartModule,
        ProductModule,
        OrdersModule,
        LayoutModule,
        AdminModule,

        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
