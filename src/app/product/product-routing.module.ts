import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent, ProductFormComponent, ProductItemComponent, ProductListComponent, } from '.';
import { CartStatePreloadingGuard, ProductExistsGuard, ProductsStatePreloadingGuard } from '../core/guards';

const routes: Routes = [
    {
        path: 'products-list',
        component: ProductListComponent,
        canActivate: [ProductsStatePreloadingGuard, CartStatePreloadingGuard],
    },
    {
        path: 'product/:productID',
        component: ProductDetailsComponent,
        canActivate: [ProductExistsGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule {
    static components = [
        ProductItemComponent,
        ProductDetailsComponent,
        ProductListComponent,
        ProductFormComponent,
    ];
}
