import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';
import { ProductModel, Category, CartProductModel } from 'src/app/core/models';
import { SharedModule } from 'src/app/shared/shared.module';

describe('CartItemComponent', () => {
    let component: CartItemComponent;
    let fixture: ComponentFixture<CartItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CartItemComponent],
            imports: [SharedModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CartItemComponent);
        component = fixture.componentInstance;

        component.cartProduct = new CartProductModel(
            new ProductModel(1, 'a', 'b', 10, Category.C1, 5),
            1
        );
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
