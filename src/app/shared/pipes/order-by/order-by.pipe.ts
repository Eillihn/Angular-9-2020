import { Pipe, PipeTransform } from '@angular/core';
import { CartProduct } from 'src/app/core/models';

@Pipe({
    name: 'orderBy',
    pure: false,
})
export class OrderByPipe implements PipeTransform {
    transform(
        value: CartProduct[],
        propertyName: string,
        direction: boolean
    ): CartProduct[] {
        if (!value) {
            return [];
        }
        const data = [...value];
        return data.sort((a, b) => {
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
        return a === b ? 0 : (
            (a < b ? -1 : 1) * (isAsc ? 1 : -1)
        );
    }
}
