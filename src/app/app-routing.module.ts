import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    PathNotFoundComponent,
    AboutComponent,
    LoginComponent,
} from './layout';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: PathNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
