import { Category } from './product-category.model';

export class ProductModel {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public category: Category,
        public availableCount: number
    ) {}

    public isAvailable(): boolean {
        return this.availableCount > 0;
    }
}
