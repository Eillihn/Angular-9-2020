import { ProductModel } from './product.model';

export interface CartProductModel {
    product: ProductModel;
    count: number;
}
