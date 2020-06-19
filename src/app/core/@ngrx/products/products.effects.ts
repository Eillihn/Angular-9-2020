import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Location } from '@angular/common';
import { catchError, concatMap, map, pluck, switchMap } from 'rxjs/operators';

import * as ProductsActions from './products.actions';
import * as RouterActions from './../router/router.actions';
import { ProductsService } from 'src/app/core/services';
import { Product } from '../../models';

@Injectable()
export class ProductsEffects {

    getProducts$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.getProducts),
            switchMap(action =>
                this.productsService
                    .getProducts()
                    .pipe(
                        map(products => ProductsActions.getProductsSuccess({ products })),
                        catchError(error => of(ProductsActions.getProductsError({ error })))
                    )
            )
        ));

    changeCountProduct$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.buyProduct, ProductsActions.returnProduct),
            pluck('product'),
            concatMap((product: Product) =>
                this.productsService
                    .updateProduct(product)
                    .pipe(
                        map((updatedProduct: Product) => {
                            return ProductsActions.changeCountProductSuccess({ product: updatedProduct });
                        }),
                        catchError(error => of(ProductsActions.updateProductError({ error })))
                    )
            )
        )
    );

    updateProduct$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.updateProduct),
            pluck('product'),
            concatMap((product: Product) =>
                this.productsService
                    .updateProduct(product)
                    .pipe(
                        map((updatedProduct: Product) => {
                            return ProductsActions.updateProductSuccess({ product: updatedProduct });
                        }),
                        catchError(error => of(ProductsActions.updateProductError({ error })))
                    )
            )
        )
    );

    createProduct$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.createProduct),
            pluck('product'),
            concatMap((product: Product) =>
                this.productsService
                    .createProduct(product)
                    .pipe(
                        map((createdProduct: Product) => {
                            return ProductsActions.createProductSuccess({ product: createdProduct });
                        }),
                        catchError(error => of(ProductsActions.createProductError({ error })))
                    )
            )
        )
    );

    deleteProduct$: Observable<Action> = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductsActions.deleteProduct),
            pluck('product'),
            concatMap((product: Product) =>
                this.productsService
                    .deleteProduct(product)
                    .pipe(
                        map(() => {
                            return ProductsActions.deleteProductSuccess({ product });
                        }),
                        catchError(error => of(ProductsActions.deleteProductError({ error })))
                    )
            )
        )
    );

    createUpdateProductSuccess$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(ProductsActions.createProductSuccess, ProductsActions.updateProductSuccess),
            map(action => RouterActions.go({ path: ['/admin/products'] }))
        );
    });

    constructor(private actions$: Actions,
                private location: Location,
                private productsService: ProductsService,
    ) {
        console.log('[PRODUCTS EFFECTS]');
    }
}
