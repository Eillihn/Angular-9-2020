import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { Product } from 'src/app/core/models';

@Component({
    selector: 'app-product',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent {
    @Input() product: Product;
    @Input() editable: boolean;
    @Output() buyProduct: EventEmitter<Product> = new EventEmitter<Product>();
    @Output() goToProduct: EventEmitter<Product> = new EventEmitter<Product>();
    @Output() editProduct: EventEmitter<Product> = new EventEmitter<Product>();
    @Output() deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();

    constructor() {
    }


    onBuyProduct() {
        this.buyProduct.emit(this.product);
    }

    onGoToProduct() {
        this.goToProduct.emit(this.product);
    }

    onEditProduct() {
        this.editProduct.emit(this.product);
    }

    onDeleteProduct() {
        this.deleteProduct.emit(this.product);
    }
}
