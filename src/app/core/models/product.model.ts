import { Category } from './product-category.model';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    availableCount: number;
    category: Category;
}
