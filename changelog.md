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
- Input-Output communication between ProductListComponent/ProductItemComponent, CartLictComponent/CartItemComponent was implemented;
- CartListComponent shows total sum and count of products in cart;
- CartItemComponent can change product count and remove it from cart;
- OnPush strategy was implemented for representation models: CartItemComponent & ProductItemComponent (works with ProductCommunicatorService);
- OnInit, OnDestroy hooks methods were used;
- click DOM event was used in ProductItemComponent for Buy button;
- appTitle template reference was added to AppComponent to show app title from class;
- HighlightDirective used @HostBinding, @HostListener decorators to highlight cart item on hover;
- ngClass directive is used in ProductItemComponent to highlight when there is 1 available product left.

# 2020-05-19: Task 3. Services and DI
- CartService API was updated to: 
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
- ZoomDirective was added to zoom font size, it uses ElementRef + Renderer2. Usage was added to AboutComponent.

# 2020-05-24: Task 4. Pipes
- uppercase, titlecase build-in pipes were added;
- ProductService#getProducts() was changed to return promise, async pipe was added to ProductListComponent;
- OrderByPipe was created to sort cart products by price, quantity and name.
