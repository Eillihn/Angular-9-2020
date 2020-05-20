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

    toString(): string {
        return `
            Product:
                Id: ${this.id},
                Name: ${this.name},
                Description: ${this.description},
                Price: ${this.price},
                Category: ${this.category},
                Available Count: ${this.availableCount}
        `;
    }
}
