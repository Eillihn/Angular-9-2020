import { ProductModel } from './product.model';

export class ProductOrderModel {
    constructor(public product: ProductModel, public count: number) {}

    getTotal(): number {
        return this.count * this.product.price;
    }
}
