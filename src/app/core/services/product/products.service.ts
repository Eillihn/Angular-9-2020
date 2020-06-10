import { Injectable, Inject } from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {
    catchError,
    retry,
    publish,
    refCount,
    share,
    concatMap,
} from 'rxjs/operators';

import { ProductModel } from 'src/app/core/models/product.model';
import { ProductsAPI } from 'src/app/core/services/products.config';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor(
        private http: HttpClient,
        @Inject(ProductsAPI) private productsUrl: string
    ) {}

    getProducts(): Observable<ProductModel[]> {
        return this.http
            .get<ProductModel[]>(this.productsUrl)
            .pipe(
                retry(3),
                publish(),
                refCount(),
                catchError(this.handleError)
            );
    }

    getProduct(id: number | string): Observable<ProductModel> {
        const url = `${this.productsUrl}/${id}`;
        return this.http
            .get<ProductModel>(url)
            .pipe(retry(3), share(), catchError(this.handleError));
    }

    updateProduct(product: ProductModel): Observable<ProductModel> {
        const url = `${this.productsUrl}/${product.id}`;
        const body = JSON.stringify(product);
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };
        return this.http
            .put<ProductModel>(url, body, options)
            .pipe(catchError(this.handleError));
    }

    createProduct(product: ProductModel): Observable<ProductModel> {
        const url = this.productsUrl;
        const body = JSON.stringify(product);
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        };
        return this.http
            .post<ProductModel>(url, body, options)
            .pipe(catchError(this.handleError));
    }

    deleteProduct(product: ProductModel): Observable<ProductModel[]> {
        const url = `${this.productsUrl}/${product.id}`;
        return this.http.delete(url).pipe(concatMap(() => this.getProducts()));
    }

    private handleError(err: HttpErrorResponse) {
        if (err.error instanceof Error) {
            console.error('An error occurred:', err.error.message);
        } else {
            console.error(
                `Backend returned code ${err.status}, body was: ${err.error}`
            );
        }
        return throwError('Something bad happened; please try again later.');
    }
}
