import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { defer, of, throwError } from 'rxjs';

import { ProductsService } from './products.service';
import { ProductsAPI } from '../products.config';
import { Product } from '../../models';

describe('ProductsService', () => {
    let service: ProductsService;
    let httpClientSpyObj: jasmine.SpyObj<HttpClient>;
    const TEST_URL = 'http://test.com/url';
    const TEST_ERROR = 'Something bad happened; please try again later.';
    const PRODUCTS = [
        {
            id: '1',
            name: 'Test Product Name 1',
            description: 'Description 1',
            price: 10,
            availableCount: 50,
            category: 'Test Category 1'
        } as Product
    ];
    const JSON_OPTIONS = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    beforeEach(() => {
        httpClientSpyObj = jasmine.createSpyObj('HttpClient', [
            'get',
            'put',
            'post',
            'delete'
        ]);
        httpClientSpyObj.get.and.returnValues(
            throwError(new HttpErrorResponse({ error: new Error('error') })),
            defer(() => of(PRODUCTS)),
            throwError('error'),
            defer(() => of(PRODUCTS[0])),
            throwError('error'),
        );
        httpClientSpyObj.put.and.returnValues(
            throwError('error'),
            defer(() => of(PRODUCTS[0]))
        );
        httpClientSpyObj.post.and.returnValues(
            throwError('error'),
            defer(() => of(PRODUCTS[0]))
        );
        httpClientSpyObj.delete.and.returnValues(
            defer(() => of(true))
        );
        TestBed.configureTestingModule({
            providers: [
                { provide: HttpClient, useValue: httpClientSpyObj },
                { provide: ProductsAPI, useValue: TEST_URL },
            ]
        });
        service = TestBed.inject(ProductsService);
    });

    describe('Get Products', () => {
        it('should handle Error if HttpClient get method failed', (done: DoneFn) => {
            service.getProducts().subscribe(
                () => {
                    fail();
                },
                (error) => {
                    expect(error).toBe(TEST_ERROR);
                    done();
                }
            );
        });

        it('should call HttpClient get method', () => {
            service.getProducts();
            expect(httpClientSpyObj.get).toHaveBeenCalledWith(TEST_URL);
        });
    });

    describe('Get Product', () => {
        it('should handle Error if HttpClient get method failed', (done: DoneFn) => {
            service.getProduct(1).subscribe(
                () => {
                    fail();
                },
                (error) => {
                    expect(error).toBe(TEST_ERROR);
                    done();
                }
            );
        });
        it('should call HttpClient get method', () => {
            const id = 1;
            service.getProduct(id);
            expect(httpClientSpyObj.get).toHaveBeenCalledWith(TEST_URL + '/' + id);
        });
    });

    describe('Delete Product', () => {
        it('should handle Error if HttpClient delete method failed', (done: DoneFn) => {
            service.deleteProduct(PRODUCTS[0]).subscribe(
                () => {
                    fail();
                },
                (error) => {
                    expect(error).toBe(TEST_ERROR);
                    done();
                }
            );
        });
        it('should call HttpClient delete method', () => {
            const product = PRODUCTS[0];
            service.deleteProduct(product);
            expect(httpClientSpyObj.delete).toHaveBeenCalledWith(TEST_URL + '/' + product.id);
        });
    });

    describe('Update Product', () => {
        it('should handle Error if HttpClient update method failed', (done: DoneFn) => {
            service.updateProduct(PRODUCTS[0]).subscribe(
                () => {
                    fail();
                },
                (error) => {
                    expect(error).toBe(TEST_ERROR);
                    done();
                }
            );
        });
        it('should call HttpClient put method', () => {
            const product = PRODUCTS[0];
            service.updateProduct(product);
            const putArgs = httpClientSpyObj.put.calls.mostRecent().args;

            expect(putArgs[0]).toBe(`${TEST_URL}/${product.id}`);
            expect(putArgs[1]).toBe(JSON.stringify(product));
            expect(JSON.stringify(putArgs[2])).toBe(JSON.stringify(JSON_OPTIONS));
        });
    });

    describe('Create Product', () => {
        it('should handle Error if HttpClient create method failed', (done: DoneFn) => {
            service.createProduct(PRODUCTS[0]).subscribe(
                () => {
                    fail();
                },
                (error) => {
                    expect(error).toBe(TEST_ERROR);
                    done();
                }
            );
        });
        it('should call HttpClient post method', () => {
            const product = PRODUCTS[0];
            service.createProduct(product);
            const putArgs = httpClientSpyObj.post.calls.mostRecent().args;

            expect(putArgs[0]).toBe(TEST_URL);
            expect(putArgs[1]).toBe(JSON.stringify(product));
            expect(JSON.stringify(putArgs[2])).toBe(JSON.stringify(JSON_OPTIONS));
        });
    });
});
