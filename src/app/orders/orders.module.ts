import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import {
    ProcessOrderComponent,
    OrderListComponent,
    OrderItemComponent,
} from './components';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
    declarations: [
        ProcessOrderComponent,
        OrderListComponent,
        OrderItemComponent,
    ],
    imports: [SharedModule, OrdersRoutingModule],
    exports: [OrderListComponent, OrdersRoutingModule],
})
export class OrdersModule {}
