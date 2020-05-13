import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    @Input() product: ProductModel;

    // Не нужно внедрять тут сервис.
    // Этот компонент получил данные через инпут от родителя,
    // Пусть скажет родителю, что надо товар купить и скажет какой товар и сколько.
    // Таким образом у родителя уже есть зависимость и если их будет не одна, а две ничего не измениться
    // А у этого компонента зависимости не будет и это упростит компонент.
    constructor(public cartService: CartService) {
    }

    ngOnInit(): void {
    }

    onBuy(id: number) {
        this.product.isAvailable = false; // у вас будет доступно только 1 шт товара?
        this.cartService.addProduct(this.product);
        console.log('Buy ' + id);
    }
}
