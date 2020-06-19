import { Product } from '../../models';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface ProductsState extends EntityState<Product> {
    originalProduct: Readonly<Product>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
}

function selectProductId(product: Product): string {
    return product.id;
}

function sortProductsByName(product1: Product, product2: Product): number {
    return product1.name.localeCompare(product2.name);
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
    selectId: selectProductId,
    sortComparer: sortProductsByName
});

export const initialProductsState: ProductsState = adapter.getInitialState({
    originalProduct: null,
    loading: false,
    loaded: false,
    error: null
});
