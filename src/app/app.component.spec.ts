import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirstModule } from './first/first.module';
import { CartModule } from './cart/cart.module';
import { ProductModule } from './product/product.module';
import { HeaderModule } from './header/header.module';
import { OrdersModule } from './orders/orders.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                SharedModule,
                CartModule,
                ProductModule,
                FirstModule,
                HeaderModule,
                OrdersModule,
            ],
            declarations: [AppComponent],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
