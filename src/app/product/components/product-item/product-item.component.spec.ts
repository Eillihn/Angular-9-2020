import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import { Category, ProductModel } from 'src/app/core/models';
import { SharedModule } from 'src/app/shared/shared.module';

describe('ProductItemComponent', () => {
    let component: ProductItemComponent;
    let fixture: ComponentFixture<ProductItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductItemComponent],
            imports: [SharedModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductItemComponent);
        component = fixture.componentInstance;

        component.product = {
            id: '1',
            name: 'Name 1',
            description: 'Description 1',
            price: 10,
            availableCount: 5,
            category: Category.C1,
        } as ProductModel;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
