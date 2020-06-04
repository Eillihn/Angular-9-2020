import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ProductModel } from 'src/app/core/models';
import { ProductsService } from 'src/app/core/services';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
    @Input() product: ProductModel = {} as ProductModel;

    constructor(
        public productsService: ProductsService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        const observer = {
            next: (product: ProductModel) => {
                this.product = {...product} as ProductModel;
            },
            error: (err: any) => console.log(err),
        };
        this.route.paramMap
            .pipe(
                switchMap((params: ParamMap) =>
                    this.productsService.getProduct(params.get('productID'))
                )
            )
            .subscribe(observer);
    }
}
