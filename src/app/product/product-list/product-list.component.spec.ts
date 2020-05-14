import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './../product.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('ProductListComponent', () => {
    let component: ProductListComponent;
    let fixture: ComponentFixture<ProductListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductListComponent, ProductComponent],
            imports: [SharedModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
