import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService, ProductCommunicatorService } from 'src/app/core/services';
import { ProductOrderModel } from 'src/app/core/models';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit, OnDestroy {
    @Input() order: ProductOrderModel;
    private sub: Subscription;

    constructor(
        public cartServide: CartService,
        public communicator: ProductCommunicatorService,
        public cd: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.sub = this.communicator.channel$.subscribe((data) => {
            if (data.id === this.order.product.id) {
                this.cd.detectChanges();
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onClearProduct(): void {
        this.cartServide.clearProducts(this.order);
    }

    onAddProduct(): void {
        this.cartServide.addProduct(this.order);
    }
    onRemoveProduct(): void {
        this.cartServide.removeProduct(this.order);
    }
}
