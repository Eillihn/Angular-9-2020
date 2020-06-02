import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProductModel } from 'src/app/core/models/product.model';
import { Category } from 'src/app/core/models/product-category.model';

const data: ProductModel[] = [
    {
        id: '1',
        name: 'Name 1',
        description: 'Description 1',
        price: 10,
        availableCount: 5,
        category: Category.C1,
    } as ProductModel,
    {
        id: '2',
        name: 'Name 2',
        description: 'Description 2',
        price: 20,
        availableCount: 3,
        category: Category.C2,
    } as ProductModel,
    {
        id: '3',
        name: 'Name 3',
        description: 'Description 3',
        price: 30,
        availableCount: 1,
        category: Category.C1,
    } as ProductModel,
];
const dataObservable: Observable<ProductModel[]> = of(data);

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    products$: Observable<ProductModel[]> = dataObservable;

    constructor() {}

    getProducts(): Observable<ProductModel[]> {
        return this.products$;
    }

    getProduct(id: number | string): Observable<ProductModel> {
        return this.products$.pipe(
            map((products: ProductModel[]) =>
                products.find((product) => product.id === id)
            ),
            catchError((err) => throwError('Error'))
        );
    }

    updateProduct(product: ProductModel): void {
        const index = data.findIndex((p) => p.id === product.id);

        if (index > -1) {
            data.splice(index, 1, product);
        }
    }

    createProduct(product: ProductModel): void {
        product.id = '' + new Date().getTime();
        data.push(product);
    }

    deleteProduct(product: ProductModel): void {
        const index = data.findIndex((p) => p.id === product.id);

        if (index > -1) {
            data.splice(index, 1);
        }
    }
}
