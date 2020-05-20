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
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent implements OnInit, OnDestroy {
    @Input() product: ProductModel;
    @Output() buyProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
    private sub: Subscription;

    constructor(
        public communicator: ProductCommunicatorService,
        private cd: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        // я правильно понимаю, что это для перерисовки компонента,
        // когда количество меняется в корзине?
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
    }
}
