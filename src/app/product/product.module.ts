import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
    declarations: [ProductComponent, ProductListComponent],
    imports: [CommonModule, SharedModule],
    exports: [ProductListComponent],
})
export class ProductModule {}
