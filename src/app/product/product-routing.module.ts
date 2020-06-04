import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent, ProductFormComponent, ProductItemComponent, ProductListComponent, } from '.';

const routes: Routes = [
    {
        path: 'products-list',
        component: ProductListComponent,
    },
    {
        path: 'product/:productID',
        component: ProductDetailsComponent,
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
