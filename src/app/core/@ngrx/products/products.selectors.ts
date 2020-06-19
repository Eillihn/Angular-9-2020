import { createFeatureSelector, createSelector } from '@ngrx/store';

import { adapter, ProductsState } from './products.state';
import { selectRouterState } from '../router';
import { Product } from '../../models';

export const selectProductsState = createFeatureSelector<ProductsState>('products');
export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);
export const selectProductsLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);

export const {
    selectEntities: selectProductsEntities,
    selectAll: selectProductsData
} = adapter.getSelectors(selectProductsState);

const selectOriginalProduct = (state: ProductsState) => state.originalProduct;
export const selectProductsOriginalProduct = createSelector(
    selectProductsState,
    selectOriginalProduct
);

export const selectSelectedProductByUrl = createSelector(
    selectProductsEntities,
    selectRouterState,
    (products, router): Product => {
        const productID = router.state.params.productID;
        if (productID) {
            return products[productID] as Product;
        } else {
            return {
                name: '',
                description: '',
                price: null,
                availableCount: null,
                category: null
            } as Product;
        }
    });
