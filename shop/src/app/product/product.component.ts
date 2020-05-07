import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    @Input() product: ProductModel;

    constructor(public cartService: CartService) {
    }

    ngOnInit(): void {
    }

    onBuy(id: number) {
        this.product.isAvailable = false;
        this.cartService.addProduct(this.product);
        console.log('Buy ' + id);
    }
}
