import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CartModule,
        ProductModule,
        LayoutModule,
        OrdersModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
