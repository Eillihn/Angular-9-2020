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
- Input-Output communication between ProductListComponent/ProductComponent, CartLictComponent/CartItemComponent was implemented;
- CartListComponent shows total sum and count of products in cart;
- CartItemComponent can change product count and remove it from cart;
- OnPush strategy was implemented for representation models: CartItemComponent & ProductComponent (works with ProductCommunicatorService);
- OnInit, OnDestroy hooks methods were used;
- click DOM event was used in ProductComponent for Buy button;
- appTitle template reference was added to AppComponent to show app title from class;
- HighlightDirective used @HostBinding, @HostListener decorators to highlight cart item on hover;
- ngClass directive is used in ProductComponent to highlight when there is 1 available product left.
