import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CanComponentDeactivate, Category, DialogService, ProductModel, } from 'src/app/core';
import { ProductsService } from 'src/app/core/services';
import { ProductModule } from '../../product.module';

@Component({
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate {
    product: ProductModel;
    originalProduct: ProductModule;
    Category = Category;

    constructor(
        private productsService: ProductsService,
        private route: ActivatedRoute,
        private router: Router,
        private dialogService: DialogService
    ) {
    }

    ngOnInit(): void {
        this.route.data
            .pipe(pluck('product'))
            .subscribe((product: ProductModel) => {
                this.product = {...product} as ProductModel;
                this.originalProduct = {...product} as ProductModel;
            });
    }

    canDeactivate():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const flags = Object.keys(this.product).map((key) => {
            return this.originalProduct[key] === this.product[key];
        });
        if (flags.every((el) => el)) {
            return true;
        }
        return this.dialogService.confirm('Discard changes?');
    }

    onSave() {
        const product = {...this.product} as ProductModel;
        product.category = Category[product.category] || product.category;
        if (product.id) {
            this.productsService.updateProduct(product);
        } else {
            this.productsService.createProduct(product);
        }
        this.originalProduct = {...this.product};
        this.onGoBack();
    }

    onGoBack(): void {
        this.router.navigate(['/admin/products']);
    }

    compareCategories(o1: string, o2: string): boolean {
        return Category[o1] === o2;
    }
}
