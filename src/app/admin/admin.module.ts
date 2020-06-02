import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductModule } from 'src/app/product/product.module';
import { OrdersModule } from 'src/app/orders/orders.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [AdminRoutingModule.components],
    imports: [SharedModule, ProductModule, OrdersModule, AdminRoutingModule],
    exports: [AdminRoutingModule],
})
export class AdminModule {}
