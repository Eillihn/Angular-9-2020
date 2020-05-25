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
import { CartProductModel } from 'src/app/core/models';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit, OnDestroy {
    @Input() cartProduct: CartProductModel;
    private sub: Subscription;

    constructor(
        public cartService: CartService,
        public communicator: ProductCommunicatorService,
        public cd: ChangeDetectorRef
    ) {}

    // Поскольку тут такая реализация, что избавится вовсе от зависимостей не получится, то ок.
    // Но обічно сюда внедрять cartService не нужно, так как этот компонент не владелец данных
    // и желательно данные тут не менять, а передавать аутпут родителю, пусть он меняет.
    ngOnInit(): void {
        this.sub = this.communicator.channel$.subscribe((data) => {
            if (data.id === this.cartProduct.product.id) {
                this.cd.detectChanges();
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onRemoveProduct(): void {
        this.cartService.removeProduct(this.cartProduct);
    }

    onIncreaseQuantity(): void {
        this.cartService.increaseQuantity(this.cartProduct);
    }
    onDecreaseQuantity(): void {
        this.cartService.decreaseQuantity(this.cartProduct);
    }
}
