import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { defer, of } from 'rxjs';
import { By } from '@angular/platform-browser';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductListComponent } from './product-list.component';
import { CartFacade, ProductsFacade, RouterFacade } from 'src/app/core/@ngrx';
import { ProductItemComponent } from '..';
import { Product } from 'src/app/core/models';

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

describe('ProductListComponent', () => {
    let component: ProductListComponent;
    let fixture: ComponentFixture<ProductListComponent>;
    let de: DebugElement;
    let productsFacadeSpyObj: jasmine.SpyObj<ProductsFacade>;
    let cartFacadeSpyObj: jasmine.SpyObj<CartFacade>;
    let routerFacadeSpyObj: jasmine.SpyObj<RouterFacade>;


    beforeEach(() => {
        productsFacadeSpyObj = jasmine.createSpyObj('ProductsFacade', [
            'buyProduct',
            'deleteProduct'
        ], {
            products$: defer(() => of(PRODUCTS)),
            productsError$: defer(() => of('Test product error'))
        });
        cartFacadeSpyObj = jasmine.createSpyObj('CartFacade', [
            'addProduct'
        ]);
        routerFacadeSpyObj = jasmine.createSpyObj('RouterFacade', [
            'goTo'
        ]);
        TestBed.configureTestingModule({
            declarations: [ProductListComponent, ProductItemComponent],
            providers: [
                { provide: ProductsFacade, useValue: productsFacadeSpyObj },
                { provide: CartFacade, useValue: cartFacadeSpyObj },
                { provide: RouterFacade, useValue: routerFacadeSpyObj },
            ],
            imports: [SharedModule],
        }).compileComponents();
        fixture = TestBed.createComponent(ProductListComponent);
        component = fixture.componentInstance;
    });

    describe('View', () => {
        it('should show products list', async () => {
            fixture.detectChanges();
            await fixture.whenStable();
            fixture.detectChanges();
            de = fixture.debugElement.query(By.css('app-product'));
            expect(de.nativeElement.textContent).toContain('Test Product Name');
        });

        it('should show products error', async () => {
            fixture.detectChanges();
            await fixture.whenStable();
            fixture.detectChanges();
            de = fixture.debugElement.query(By.css('.products-error'));
            expect(de.nativeElement.textContent).toContain('Test product error');
        });
    });

    describe('Buying Product', () => {
        it('should call ProductsFacade with selected product with available count - 1', () => {
            fixture.detectChanges();
            const product = PRODUCTS[0];
            component.onBuyProduct(product);
            expect(productsFacadeSpyObj.buyProduct).toHaveBeenCalledWith({
                product: {
                    ...product,
                    availableCount: product.availableCount - 1
                } as Product
            });
        });

        it('should call CartFacade with selected product', () => {
            fixture.detectChanges();
            const product = PRODUCTS[0];
            component.onBuyProduct(product);
            expect(cartFacadeSpyObj.addProduct).toHaveBeenCalledWith({ product: { ...product } as Product });
        });
    });

    describe('Deleting Product', () => {
        it('should call ProductsFacade with selected product', () => {
            fixture.detectChanges();
            const product = PRODUCTS[0];
            component.onDeleteProduct(product);
            expect(productsFacadeSpyObj.deleteProduct).toHaveBeenCalledWith({ product: { ...product } as Product });
        });
    });

    describe('Editing Product', () => {
        it('should call RouterFacade to go to Edit Product Page for selected product', () => {
            fixture.detectChanges();
            const product = PRODUCTS[0];
            component.onEditProduct(product);
            expect(routerFacadeSpyObj.goTo).toHaveBeenCalledWith({ path: ['/admin/products/edit', product.id] });
        });
    });

    describe('Go To Product', () => {
        it('should call RouterFacade to go to Product Detail Page for selected product', () => {
            fixture.detectChanges();
            const product = PRODUCTS[0];
            component.onGoToProduct(product);
            expect(routerFacadeSpyObj.goTo).toHaveBeenCalledWith({ path: ['/product', product.id] });
        });
    });
});
