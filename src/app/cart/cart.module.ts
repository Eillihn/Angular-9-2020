import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
    declarations: [CartListComponent, CartItemComponent],
    imports: [SharedModule, ReactiveFormsModule],
    exports: [CartListComponent],
})
export class CartModule {}
