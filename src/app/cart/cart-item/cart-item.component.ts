import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';

import { CartProduct } from 'src/app/core/models';
import { CartFacade, ProductsFacade } from 'src/app/core/@ngrx';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
    @Input() cartProduct: CartProduct;

    constructor(
        private productsFacade: ProductsFacade,
        private cartFacade: CartFacade
    ) {
    }

    onRemoveProduct(): void {
        const productToReturn = {
            ...this.cartProduct.product,
            availableCount: this.cartProduct.product.availableCount + this.cartProduct.count
        };
        this.cartFacade.removeProduct({ cartProduct: this.cartProduct });
        this.productsFacade.returnProduct({ product: productToReturn });
    }

    onIncreaseQuantity(): void {
        const productToBuy = {
            ...this.cartProduct.product,
            availableCount: this.cartProduct.product.availableCount - 1
        };
        this.cartFacade.increaseQuantity({ cartProduct: this.cartProduct });
        this.productsFacade.buyProduct({ product: productToBuy });
    }

    onDecreaseQuantity(): void {
        const productToReturn = {
            ...this.cartProduct.product,
            availableCount: this.cartProduct.product.availableCount + 1
        };
        this.cartFacade.decreaseQuantity({ cartProduct: this.cartProduct });
        this.productsFacade.returnProduct({ product: productToReturn });
    }
}
