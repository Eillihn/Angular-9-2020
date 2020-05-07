import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product.module';
import { CartService } from './../cart/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    @Input() product: Product;

    constructor(public cartService: CartService) {}

    ngOnInit(): void {}

    onBuy(id: number) {
        this.product.isAvailable = false;
        this.cartService.addProduct(this.product);
        console.log('Buy ' + id);
    }
}
