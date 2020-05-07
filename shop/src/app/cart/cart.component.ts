import { Component, OnInit } from '@angular/core';

import { ProductModel } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
    displayedColumns: string[] = [
        'id',
        'name',
        'description',
        'price',
        'category',
    ];

    constructor(public cartService: CartService) {
    }

    ngOnInit(): void {
    }

    getProducts(): ProductModel[] {
        return this.cartService.getProducts();
    }

    hasProducts(): boolean {
        return this.getProductsCount() > 0;
    }

    getProductsCount(): number {
        return this.getProducts().length;
    }
}
