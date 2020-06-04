import { Category } from './product-category.model';

export interface ProductModel {
    id: string;
    name: string;
    description: string;
    price: number;
    availableCount: number;
    category: Category;
}
