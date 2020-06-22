import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { OrderItemComponent, OrderListComponent, ProcessOrderComponent, } from './components';
import { OrdersRoutingModule } from './orders-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    declarations: [
        ProcessOrderComponent,
        OrderListComponent,
        OrderItemComponent,
    ],
    imports: [SharedModule, OrdersRoutingModule, ReactiveFormsModule, MatCheckboxModule],
    exports: [OrderListComponent, OrdersRoutingModule],
})
export class OrdersModule {
}
