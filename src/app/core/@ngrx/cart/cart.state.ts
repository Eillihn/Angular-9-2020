import { CartProduct } from '../../models';

export interface CartState {
    data: ReadonlyArray<CartProduct>;
    readonly totalQuantity: number;
    readonly totalSum: number;
    loaded: boolean;
    sortName: string;
    sortDirection: boolean;
}

export const initialCartState: CartState = {
    data: [],
    totalQuantity: 0,
    totalSum: 0,
    loaded: false,
    sortName: 'name',
    sortDirection: false
};
