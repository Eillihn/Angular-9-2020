# Changelog

All notable changes to this project will be documented in this file.

## 2020-05-07: Task 1. Introduction

### Added

-   First Component with properties id, name, description, price, isAvailable, sizes;
-   Product Component: displays products data and Buy button;
-   Product List Component: displays list of Product components;
-   Cart Component: displays products in cart;
-   Cart Service: manages products in the cart;
-   Products Service: manages all products;
-   Menu Component: displays menu with name os site and icon.

## 2020-05-14: Task 2. Components

### Added

- App was divided in AppModule, CartModule, ProductsModule, OrdersModule, SharedModule;
- Input-Output communication between ProductListComponent/ProductItemComponent, CartListComponent/CartItemComponent was implemented;
- CartListComponent shows total sum and count of products in cart;
- CartItemComponent can change product count and remove it from cart;
- OnPush strategy was being implement for representation models: CartItemComponent & ProductItemComponent (works with ProductCommunicatorService);
- OnInit, OnDestroy hooks methods were being use;
- click DOM event was being use in ProductItemComponent for Buy button;
- appTitle template reference was being add to AppComponent to show app title from class;
- HighlightDirective used @HostBinding, @HostListener decorators to highlight cart item on hover;
- ngClass directive is being use in ProductItemComponent to highlight when there is 1 available product left.

# 2020-05-19: Task 3. Services and DI
- CartService API was being update to: 
    - cartProducts, 
    - totalQuantity, 
    - totalSum, 
    - addProduct(), 
    - removeProduct(),
    - increaseQuantity()/decreaseQuantity(),
    - removeAllProducts(),
    - updateCartData();
- LocalStorageService was added to operate with window.localStorage trough setItem(), getItem(), removeItem();
- ConfigOptionsService was added to operate with config object like (id, login, email, ...);
- ConstantsService was added as literal { App: "Shop", Ver: "1.0" };
- GeneratorService was added to generate random string length n with chars A-Za-z0-9;
- AboutComponent was added to show that services work;
- ZoomDirective was added to zoom font size, it uses ElementRef + Renderer2. Usage was being add to AboutComponent.

# 2020-05-24: Task 4. Pipes
- uppercase, titlecase, currency build-in pipes were being add;
- ProductService#getProducts() was changed to return promise, async pipe was being add to ProductListComponent;
- OrderByPipe was created to sort cart products by price, quantity and name.

# 2020-06-02: Task 5. Routing
- Routing was being add:
    - ProductRoutingModule:
        /products-list
        /product/:productID
    - CartModule:
        /cart
    - OrdersRoutingModule:
        /order
    - AdminRoutingModule:
        /admin + canActivateGuard
        /admin/products
        /admin/product/add
        /admin/product/edit:productID + resolve guard
        /admin/orders
- cart items are being save/restore to/from localstorage.

# 2020-06-10: Task 6. HttpClient
- Products, orders are being receive from json server;
- Products are being receive by use of Observable, orders - Promise;
- TimingInterceptor was being add for requests with 'products' in url;
- AppSettings service was being add to look after app settings with THEME property in Local Storage, 
if fail - try with 2 retry to receive it from assets/app-settings.json.
