import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { CartListComponent, CartItemComponent } from '.';
import { CartRoutingModule } from './cart-routing.module';
import { LocalStorageService } from 'src/app/core';

@NgModule({
    declarations: [CartListComponent, CartItemComponent],
    imports: [SharedModule, ReactiveFormsModule],
    exports: [CartListComponent, CartRoutingModule],
    providers: [
        { provide: LocalStorageService, useClass: LocalStorageService },
    ],
})
export class CartModule {}
