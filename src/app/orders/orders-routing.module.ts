import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessOrderComponent } from './components';
import { CartStatePreloadingGuard, OrdersStatePreloadingGuard } from 'src/app/core/guards';

const routes: Routes = [
    {
        path: 'order',
        component: ProcessOrderComponent,
        canActivate: [OrdersStatePreloadingGuard, CartStatePreloadingGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrdersRoutingModule {
}
