import { createAction, props } from '@ngrx/store';

import { Product } from 'src/app/core/models/product.model';
import { CartProduct } from '../../models';

export const addProduct = createAction(
    '[Product List Page] ADD_CART_PRODUCT',
    props<{ product: Product }>()
);
export const getCartProducts = createAction(
    '[Cart,Order,Product List Pages (App)] GET_CART_PRODUCTS'
);
export const saveCartProducts = createAction(
    '[Cart,Product List Pages (App)] SAVE_CART_PRODUCTS',
    props<{ cartProducts: CartProduct[] }>()
);
export const removeProduct = createAction(
    '[Cart Page] REMOVE_CART_PRODUCT',
    props<{ cartProduct: CartProduct }>()
);
export const increaseQuantity = createAction(
    '[Cart Page] INCREASE_QUANTITY_CART_PRODUCT',
    props<{ cartProduct: CartProduct }>()
);
export const decreaseQuantity = createAction(
    '[Cart Page] DECREASE_QUANTITY_CART_PRODUCT',
    props<{ cartProduct: CartProduct }>()
);
export const buyAllProducts = createAction(
    '[Order Page] BUY_ALL_CART_PRODUCTS'
);
export const setCartProducts = createAction(
    '[Set Cart Products Effect] SET_CART_PRODUCTS',
    props<{ cartProducts: CartProduct[] }>()
);
export const setSortName = createAction(
    '[Cart List Page] SET_SORT_NAME',
    props<{ sortName: string}>()
);
export const setDirection = createAction(
    '[Cart List Page] SET_DIRECTION',
    props<{ sortDirection: boolean}>()
);
export const getCartProductsSuccess = createAction(
    '[Get Cart Products Effect] GET_CART_PRODUCTS_SUCCESS',
    props<{ cartProducts: CartProduct[] }>()
);
export const setCartProductsSuccess = createAction(
    '[Set Cart Products Effect] SET_CART_PRODUCTS_SUCCESS',
    props<{ cartProducts: CartProduct[] }>()
);
export const saveCartProductsSuccess = createAction(
    '[Save Cart Products Effect] SAVE_CART_PRODUCTS_SUCCESS'
);
