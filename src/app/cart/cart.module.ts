import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
    declarations: [CartListComponent, CartItemComponent],
    imports: [CommonModule, SharedModule],
    exports: [CartListComponent],
})
export class CartModule {}
