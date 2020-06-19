import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, CanDeactivateGuard, OrdersStatePreloadingGuard, ProductExistsGuard, ProductsStatePreloadingGuard } from 'src/app/core';
import { ProductFormComponent } from 'src/app/product';
import { ProductResolveGuard } from './guards';
import { AdminComponent, AdminDashboardComponent, ManageOrdersComponent, ManageProductsComponent } from '.';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'orders',
                component: ManageOrdersComponent,
                canActivate: [OrdersStatePreloadingGuard]
            },
            {
                path: 'products',
                component: ManageProductsComponent,
                canActivate: [ProductsStatePreloadingGuard]
            },
            {
                path: 'products/add',
                canDeactivate: [CanDeactivateGuard],
                component: ProductFormComponent,
                resolve: {
                    product: ProductResolveGuard,
                },
            },
            {
                path: 'products/edit/:productID',
                canDeactivate: [CanDeactivateGuard],
                component: ProductFormComponent,
                canActivate: [ProductExistsGuard],
                resolve: {
                    product: ProductResolveGuard,
                },
            },
            { path: '', component: AdminDashboardComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {
    static components = [
        AdminComponent,
        AdminDashboardComponent,
        ManageProductsComponent,
        ManageOrdersComponent,
    ];
}
