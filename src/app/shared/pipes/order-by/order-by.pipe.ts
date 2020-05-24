import { Pipe, PipeTransform } from '@angular/core';
import { CartProductModel } from 'src/app/core/models';

@Pipe({
    name: 'orderBy',
    pure: false,
})
export class OrderByPipe implements PipeTransform {
    transform(
        value: CartProductModel[],
        propertyName: string,
        direction: boolean
    ): CartProductModel[] {
        return value.sort((a, b) => {
            switch (propertyName) {
                case 'price':
                    return this.compare(
                        a.product.price,
                        b.product.price,
                        direction
                    );
                case 'quantity':
                    return this.compare(a.count, b.count, direction);
                case 'name':
                    return this.compare(
                        a.product.name,
                        b.product.name,
                        direction
                    );
                default:
                    return 0;
            }
        });
    }

    compare(a: number | string, b: number | string, isAsc: boolean): number {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}
