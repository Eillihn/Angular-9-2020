import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListComponent } from './cart-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('CartListComponent', () => {
    let component: CartListComponent;
    let fixture: ComponentFixture<CartListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CartListComponent],
            imports: [SharedModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CartListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
