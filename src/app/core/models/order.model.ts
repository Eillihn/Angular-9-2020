import { CartProduct } from './cart-product.model';
import { OrderStatus } from './order-status.model';

export interface Order {
    id: string;
    date: Date;
    status: OrderStatus;
    cartProducts: CartProduct[];
    totalQuantity: number;
    total: number;
}
