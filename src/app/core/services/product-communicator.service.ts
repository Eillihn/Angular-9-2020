import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models';

@Injectable({
    providedIn: 'root',
})
export class ProductCommunicatorService {
    private channel = new Subject<Product>();

    channel$: Observable<Product> = this.channel.asObservable();

    publishData(data: Product) {
        this.channel.next(data);
    }
}
