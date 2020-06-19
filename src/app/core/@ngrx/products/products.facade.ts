import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectProductsData, selectProductsError, selectProductsOriginalProduct, selectSelectedProductByUrl } from './products.selectors';
import * as ProductsActions from './products.actions';

import { Observable } from 'rxjs';

import { Product } from 'src/app/core';

@Injectable({
    providedIn: 'root'
})
export class ProductsFacade {
    products$: Observable<ReadonlyArray<Product>>;
    productsError$: Observable<Error | string>;
    selectedProductByUrl$: Observable<Product>;
    selectedProductsOriginalProduct$: Observable<Product>;

    constructor(private store: Store<AppState>) {
        this.products$ = this.store.pipe(select(selectProductsData));
        this.productsError$ = this.store.pipe(select(selectProductsError));
        this.selectedProductByUrl$ = this.store.pipe(select(selectSelectedProductByUrl));
        this.selectedProductsOriginalProduct$ = this.store.pipe(select(selectProductsOriginalProduct));
    }

    createProduct(props: { product: Product }) {
        this.store.dispatch(ProductsActions.createProduct(props));
    }

    updateProduct(props: { product: Product }) {
        this.store.dispatch(ProductsActions.updateProduct(props));
    }

    deleteProduct(props: { product: Product }) {
        this.store.dispatch(ProductsActions.deleteProduct(props));
    }

    buyProduct(props: { product: Product }) {
        this.store.dispatch(ProductsActions.buyProduct(props));
    }

    returnProduct(props: { product: Product }) {
        this.store.dispatch(ProductsActions.buyProduct(props));
    }

    setOriginalProduct(props: { product: Product }) {
        this.store.dispatch(ProductsActions.setOriginalProduct(props));
    }
}
