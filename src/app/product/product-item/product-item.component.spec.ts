import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import { ProductModel, Category } from 'src/app/core/models';
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

        component.product = new ProductModel(1, 'a', 'b', 10, Category.C1, 5);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
