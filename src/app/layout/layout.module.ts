import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import {
    FirstComponent,
    HeaderComponent,
    AboutComponent,
    LoginComponent,
} from '.';

@NgModule({
    declarations: [
        FirstComponent,
        HeaderComponent,
        AboutComponent,
        LoginComponent,
    ],
    imports: [SharedModule, RouterModule],
    exports: [FirstComponent, HeaderComponent, AboutComponent],
})
export class LayoutModule {}
