import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductModel } from '../../models';

@Injectable({
    providedIn: 'root',
})
export class ProductCommunicatorService {
    private channel = new Subject<ProductModel>();

    channel$: Observable<ProductModel> = this.channel.asObservable();

    publishData(data: ProductModel) {
        this.channel.next(data);
    }
}
