import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component, DebugElement } from '@angular/core';

import { ProductItemComponent } from './product-item.component';
import { Category, Product } from 'src/app/core/models';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    template: `
        <app-product
            (buyProduct)="onBuyProduct($event)"
            (deleteProduct)="onDeleteProduct($event)"
            (editProduct)="onEditProduct($event)"
            (goToProduct)="onGoToProduct($event)"
            [editable]="editable"
            [product]="product"
        ></app-product>
    `
})
class ProductItemHostComponent {
    product = {
        id: '1',
        name: 'Name 1',
        description: 'Description 1',
        price: 10,
        availableCount: 5,
        category: Category.C1,
    } as Product;
    editable: boolean;
    selectedProduct: Product;

    onBuyProduct(product: Product) {
        this.selectedProduct = product;
    }

    onDeleteProduct(product: Product) {
        this.selectedProduct = product;
    }

    onEditProduct(product: Product) {
        this.selectedProduct = product;
    }

    onGoToProduct(product: Product) {
        this.selectedProduct = product;
    }
}

describe('ProductItemComponent', () => {
    let component: ProductItemHostComponent;
    let fixture: ComponentFixture<ProductItemHostComponent>;
    let de: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductItemComponent, ProductItemHostComponent],
            imports: [SharedModule],
        }).overrideComponent(ProductItemComponent, {
            set: { changeDetection: ChangeDetectionStrategy.Default }
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductItemHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Go To Product Link', () => {
        it('should raise selected product when clicked', () => {
            const goToEl = fixture.debugElement.query(By.css('.go-to-link'));
            goToEl.triggerEventHandler('click', null);
            expect(JSON.stringify(component.selectedProduct)).toBe(JSON.stringify(component.product));
        });
    });

    describe('Not Editable', () => {
        beforeEach(() => {
            component.editable = false;
            fixture.detectChanges();
        });

        describe('Actions', () => {

            it('should contain buy button', () => {
                de = fixture.debugElement.query(By.css('.buy-button'));
                expect(de.nativeElement).toBeDefined();
            });

            it('should contain available count', () => {
                de = fixture.debugElement.query(By.css('.count'));
                expect(de.nativeElement).toBeDefined();
            });

            it('should not contain edit button', () => {
                de = fixture.debugElement.query(By.css('.edit-button'));
                expect(de).toBeNull();
            });

            it('should not contain delete button', () => {
                de = fixture.debugElement.query(By.css('.edit-button'));
                expect(de).toBeNull();
            });
        });

        describe('Buy Button', () => {
            let buyEl;
            beforeEach(() => {
                buyEl = fixture.debugElement.query(By.css('.buy-button'));
            });

            it('should raise selected product when clicked', () => {
                buyEl.triggerEventHandler('click', null);
                expect(JSON.stringify(component.selectedProduct)).toBe(JSON.stringify(component.product));
            });
            it('should not be disabled if there is available product', () => {
                component.product.availableCount = 5;
                fixture.detectChanges();
                expect(buyEl.nativeElement.getAttribute('disabled')).toBeNull();
            });
            it('should be disabled if there is no available product', () => {
                component.product.availableCount = 0;
                fixture.detectChanges();
                expect(buyEl.nativeElement.getAttribute('disabled')).toBe('true');
            });
        });

        describe('Available Count', () => {
            let count: Element;

            beforeEach(() => {
                count = fixture.debugElement.query(By.css('.count')).nativeElement;
            });

            it('should has last class, if it is 1', () => {
                component.product.availableCount = 1;
                fixture.detectChanges();

                expect(count.classList).toContain('last');
            });
            it('should has not last class, if it is not 1', () => {
                component.product.availableCount = 2;
                fixture.detectChanges();

                expect(count.classList).not.toContain('last');
            });
            it('should has not-available class, if it is 0', () => {
                component.product.availableCount = 0;
                fixture.detectChanges();

                expect(count.classList).toContain('not-available');
            });
            it('should has not not-available class, if it is not 0', () => {
                component.product.availableCount = 1;
                fixture.detectChanges();

                expect(count.classList).not.toContain('not-available');
            });
        });
    });

    describe('Editable', () => {
        beforeEach(() => {
            component.editable = true;
            fixture.detectChanges();
        });
        describe('Actions', () => {

            it('should not contain buy button', () => {
                de = fixture.debugElement.query(By.css('.buy-button'));
                expect(de).toBeNull();
            });

            it('should not contain available count', () => {
                de = fixture.debugElement.query(By.css('.count'));
                expect(de).toBeNull();
            });

            it('should contain edit button', () => {
                de = fixture.debugElement.query(By.css('.edit-button'));
                expect(de.nativeElement).toBeDefined();
            });

            it('should contain delete button', () => {
                de = fixture.debugElement.query(By.css('.edit-button'));
                expect(de.nativeElement).toBeDefined();
            });
        });

        describe('Edit Button', () => {
            it('should raise selected product when clicked', () => {
                const editEl = fixture.debugElement.query(By.css('.edit-button'));
                editEl.triggerEventHandler('click', null);
                expect(JSON.stringify(component.selectedProduct)).toBe(JSON.stringify(component.product));
            });
        });
        describe('Delete Button', () => {
            it('should raise selected product when clicked', () => {
                const deleteEl = fixture.debugElement.query(By.css('.delete-button'));
                deleteEl.triggerEventHandler('click', null);
                expect(JSON.stringify(component.selectedProduct)).toBe(JSON.stringify(component.product));
            });
        });
    });


});
