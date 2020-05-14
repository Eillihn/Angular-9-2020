import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { ProductModel, Category } from 'src/app/core/models';
import { SharedModule } from 'src/app/shared/shared.module';

describe('ProductComponent', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductComponent],
            imports: [SharedModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;

        component.product = new ProductModel(1, 'a', 'b', 10, Category.C1, 5);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
