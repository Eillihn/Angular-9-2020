import { Category } from './product-category.model';

export interface ProductModel {
    id: number;
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    category: Category;
}
