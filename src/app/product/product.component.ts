import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/core/models';
import { ProductCommunicatorService } from 'src/app/core/services';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit, OnDestroy {
    @Input() product: ProductModel;
    @Output() buyProduct: EventEmitter<ProductModel> = new EventEmitter<
        ProductModel
    >();
    private sub: Subscription;

    constructor(
        public communicator: ProductCommunicatorService,
        private cd: ChangeDetectorRef
    ) {}

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
        console.log('Buy ' + this.product.id);
        this.product.availableCount--;
        this.communicator.publishData(this.product);
    }
}
