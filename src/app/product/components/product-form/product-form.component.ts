import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {
    DialogService,
    CanComponentDeactivate,
    ProductModel,
    Category,
} from 'src/app/core';
import { ProductsService } from '../../../core/services/product/products.service';
import { ProductModule } from '../../product.module';

@Component({
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate {
    product: ProductModel;
    originalProduct: ProductModule;
    Category = Category;
    selectedCategory: string;

    constructor(
        private productsService: ProductsService,
        private route: ActivatedRoute,
        private router: Router,
        private dialogService: DialogService
    ) {}

    ngOnInit(): void {
        this.route.data
            .pipe(pluck('product'))
            .subscribe((product: ProductModel) => {
                this.product = { ...product } as ProductModel;
                this.originalProduct = { ...product } as ProductModel;
            });
    }

    canDeactivate():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const flags = Object.keys(this.product).map((key) => {
            if (this.originalProduct[key] === this.product[key]) {
                return true;
            }
            return false;
        });
        if (flags.every((el) => el)) {
            return true;
        }
        return this.dialogService.confirm('Discard changes?');
    }

    onSave() {
        const product = { ...this.product } as ProductModel;
        product.category = Category[product.category] || product.category;
        if (product.id) {
            this.productsService.updateProduct(product);
        } else {
            this.productsService.createProduct(product);
        }
        this.originalProduct = { ...this.product };
        this.onGoBack();
    }

    onDelete() {
        const product = { ...this.product } as ProductModel;

        if (product.id) {
            this.productsService.deleteProduct(product);
        }
    }

    onGoBack(): void {
        this.router.navigate(['/admin/products']);
    }

    compareCategories(o1: string, o2: string): boolean {
        return Category[o1] === o2;
    }
}
