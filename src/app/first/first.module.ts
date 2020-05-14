import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { FirstComponent } from './first.component';

@NgModule({
    declarations: [FirstComponent],
    imports: [CommonModule, SharedModule],
    exports: [FirstComponent],
})
export class FirstModule {}
