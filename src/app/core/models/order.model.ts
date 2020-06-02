import { CartProductModel } from './cart-product.model';
import { OrderStatus } from './order-status.model';

export interface OrderModel {
    id: string;
    date: Date;
    status: OrderStatus;
    cartProducts: CartProductModel[];
    totalQuantity: number;
    total: number;
}
