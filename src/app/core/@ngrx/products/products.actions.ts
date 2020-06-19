import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/core/models/product.model';

export const getProducts = createAction(
    '[Product List Page (App)] GET_PRODUCTS'
);
export const createProduct = createAction(
    '[Manage Products Page] CREATE_PRODUCT',
    props<{ product: Product }>()
);
export const updateProduct = createAction(
    '[Product Form Page] UPDATE_PRODUCT',
    props<{ product: Product }>()
);
export const buyProduct = createAction(
    '[Product List Page] BUY_PRODUCT',
    props<{ product: Product }>()
);
export const returnProduct = createAction(
    '[Cart Page] RETURN_PRODUCT',
    props<{ product: Product }>()
);
export const deleteProduct = createAction(
    '[Manage Products Page] DELETE_PRODUCT',
    props<{ product: Product }>()
);
export const setOriginalProduct = createAction(
    '[Product Form Page (App)] SET_ORIGINAL_PRODUCT',
    props<{ product: Product }>()
);
export const getProductsSuccess = createAction(
    '[Get Products Effect] GET_PRODUCTS_SUCCESS',
    props<{ products: Product[] }>()
);
export const getProductsError = createAction(
    '[Get Products Effect] GET_PRODUCTS_ERROR',
    props<{ error: Error | string }>()
);
export const updateProductSuccess = createAction(
    '[Update Product Effect] UPDATE_PRODUCT_SUCCESS',
    props<{ product: Product }>()
);
export const changeCountProductSuccess = createAction(
    '[Change Count Product Effect] CHANGE_COUNT_PRODUCT_SUCCESS',
    props<{ product: Product }>()
);
export const updateProductError = createAction(
    '[Update Product Effect] UPDATE_PRODUCT_ERROR',
    props<{ error: Error | string }>()
);
export const createProductSuccess = createAction(
    '[Create Product Effect] CREATE_PRODUCT_SUCCESS',
    props<{ product: Product }>()
);
export const createProductError = createAction(
    '[Create Product Effect] CREATE_PRODUCT_ERROR',
    props<{ error: Error | string }>()
);
export const deleteProductSuccess = createAction(
    '[Delete Product Effect] DELETE_PRODUCT_SUCCESS',
    props<{ product: Product }>()
);
export const deleteProductError = createAction(
    '[Delete Product Effect] DELETE_PRODUCT_ERROR',
    props<{ error: Error | string }>()
);
