import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from '.';
import { CartStatePreloadingGuard } from '../core/guards';

const routes: Routes = [
    {
        path: 'cart',
        component: CartListComponent,
        canActivate: [CartStatePreloadingGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CartRoutingModule {
}
