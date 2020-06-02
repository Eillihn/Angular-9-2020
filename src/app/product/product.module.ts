import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';

@NgModule({
    declarations: [ProductRoutingModule.components],
    imports: [SharedModule],
    exports: [ProductRoutingModule, ProductRoutingModule.components],
})
export class ProductModule {}
