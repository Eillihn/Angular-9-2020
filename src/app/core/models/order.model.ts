import { CartProduct } from './cart-product.model';

export interface Order {
    id: string;
    cartProducts: CartProduct[];
    totalQuantity: number;
    total: number;
    firstName: string;
    lastName: string;
    phones: { phone: string }[];
    email: string;
    pickup: boolean;
    address: string;
}
