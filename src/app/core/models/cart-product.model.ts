import { ProductModel } from './product.model';

export class CartProductModel {
    constructor(public product: ProductModel, public count: number) {}

    getTotal(): number {
        return this.count * this.product.price;
    }

    toString(): string {
        return `
            Cart Product:
                Count: ${this.count}
                ${this.product.toString()}
        `;
    }
}
