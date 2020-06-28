import { OrderByPipe } from './order-by.pipe';
import { CartProduct, Product } from 'src/app/core/models';

describe('OrderByPipe', () => {
    const pipe = new OrderByPipe();
    const CART_PRODUCTS = [
        {
            product: {
                id: '2',
                name: 'Name 2',
                description: 'Description 2',
                price: 20,
                availableCount: 5,
                category: 'Test Category 2'
            } as Product,
            count: 3
        } as CartProduct,
        {
            product: {
                id: '1',
                name: 'Name 1',
                description: 'Description 1',
                price: 1,
                availableCount: 50,
                category: 'Test Category 1'
            } as Product,
            count: 1
        } as CartProduct,
        {
            product: {
                id: '3',
                name: 'Name 3',
                description: 'Description 3',
                price: 30,
                availableCount: 1,
                category: 'Test Category 1'
            } as Product,
            count: 5
        } as CartProduct
    ];

    it('should order cart products by product name asc', () => {
        expect(pipe.transform(CART_PRODUCTS, 'name', true)[0].product.name).toBe('Name 1');
    });
    it('should order cart products by product name desc', () => {
        expect(pipe.transform(CART_PRODUCTS, 'name', false)[0].product.name).toBe('Name 3');
    });
    it('should order cart products by product price asc', () => {
        expect(pipe.transform(CART_PRODUCTS, 'price', true)[0].product.price).toBe(1);
    });
    it('should order cart products by product price desc', () => {
        expect(pipe.transform(CART_PRODUCTS, 'price', false)[0].product.price).toBe(30);
    });
    it('should order cart products by quantity asc', () => {
        expect(pipe.transform(CART_PRODUCTS, 'quantity', true)[0].count).toBe(1);
    });
    it('should order cart products by quantity desc', () => {
        expect(pipe.transform(CART_PRODUCTS, 'quantity', false)[0].count).toBe(5);
    });
    it('should do nothing if sort name is not quantity/name/price', () => {
        expect(JSON.stringify(pipe.transform(CART_PRODUCTS, 'qwe', true))).toBe(JSON.stringify(CART_PRODUCTS));
    });
    it('should return empty array if cart products is null', () => {
        expect(JSON.stringify(pipe.transform(null, 'name', true))).toBe('[]');
    });
});
