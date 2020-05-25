import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
    declarations: [ProductItemComponent, ProductListComponent],
    imports: [SharedModule],
    exports: [ProductListComponent],
})
export class ProductModule {}
