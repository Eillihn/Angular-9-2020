import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/core/models';
import { ProductCommunicatorService } from 'src/app/core/services';

@Component({
    selector: 'app-product',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent implements OnInit, OnDestroy {
    @Input() product: ProductModel;
    @Input() editable: boolean;
    @Output() buyProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
    @Output() goToProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
    @Output() editProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
    @Output() deleteProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
    private sub: Subscription;

    constructor(
        public communicator: ProductCommunicatorService,
        private cd: ChangeDetectorRef
    ) {
    }

    ngOnInit(): void {
        this.sub = this.communicator.channel$.subscribe((data) => {
            if (data.id === this.product.id) {
                this.cd.detectChanges();
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
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
