import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, CanDeactivateGuard } from 'src/app/core';
import { ProductFormComponent } from 'src/app/product';
import { ProductResolveGuard } from 'src/app/product/guards';
import { AdminComponent, AdminDashboardComponent, ManageOrdersComponent, ManageProductsComponent, } from '.';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {path: 'orders', component: ManageOrdersComponent},
            {path: 'products', component: ManageProductsComponent},
            {
                path: 'products/add',
                canDeactivate: [CanDeactivateGuard],
                component: ProductFormComponent,
            },
            {
                path: 'products/edit/:productID',
                canDeactivate: [CanDeactivateGuard],
                component: ProductFormComponent,
                resolve: {
                    product: ProductResolveGuard,
                },
            },
            {path: '', component: AdminDashboardComponent},
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
