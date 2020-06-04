import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent, FirstComponent, HeaderComponent, LoginComponent, PathNotFoundComponent, } from '.';

@NgModule({
    declarations: [
        FirstComponent,
        HeaderComponent,
        AboutComponent,
        LoginComponent,
        PathNotFoundComponent,
    ],
    imports: [SharedModule, RouterModule],
    exports: [FirstComponent, HeaderComponent, AboutComponent, PathNotFoundComponent],
})
export class LayoutModule {
}
