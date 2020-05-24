import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { FirstComponent, HeaderComponent, AboutComponent } from './components';

@NgModule({
    declarations: [FirstComponent, HeaderComponent, AboutComponent],
    imports: [SharedModule],
    exports: [FirstComponent, HeaderComponent, AboutComponent],
})
export class LayoutModule {}
