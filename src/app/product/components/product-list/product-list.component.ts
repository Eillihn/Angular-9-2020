import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductsService } from '../../../core/services/product/products.service';
import { CartService, ProductModel } from 'src/app/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    products: Observable<ProductModel[]>;
    @Input() editable: boolean;

    constructor(
        public productService: ProductsService,
        public cartService: CartService,
        public router: Router
    ) {}

    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }

    onBuyProduct(product: ProductModel): void {
        this.cartService.addProduct(product);
    }

    onGoToProduct(product: ProductModel): void {
        const link = ['/product', product.id];
        this.router.navigate(link);
    }

    onEditProduct(product: ProductModel): void {
        const link = ['/admin/products/edit', product.id];
        this.router.navigate(link);
    }

    onDeleteProduct(product: ProductModel): void {
        this.productService.deleteProduct(product);
    }
}
