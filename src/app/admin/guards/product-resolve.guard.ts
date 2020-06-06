import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

import { ProductModule } from 'src/app/product/product.module';
import { ProductsService } from 'src/app/core/services';
import { ProductModel } from 'src/app/core';

@Injectable({
    providedIn: 'any',
})
export class ProductResolveGuard implements Resolve<ProductModule> {
    constructor(
        private productsService: ProductsService,
        private router: Router
    ) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<ProductModule | null> {
        if (!route.paramMap.has('productID')) {
            return of(new ProductModule());
        }

        const id = route.paramMap.get('productID');

        return this.productsService.getProduct(id).pipe(
            map((product: ProductModel) => {
                if (product) {
                    return product;
                } else {
                    this.router.navigate(['/admin/products']);
                    return null;
                }
            }),
            take(1),
            catchError(() => {
                this.router.navigate(['/admin/products']);
                return of(null);
            })
        );
    }
}
