import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { OrderItemComponent, OrderListComponent, ProcessOrderComponent, } from './components';
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
export class OrdersModule {
}
