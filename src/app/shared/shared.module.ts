import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HighlightDirective } from './directives/highlight.directive';
import { ZoomDirective } from './directives/zoom.directive';
import { MaterialModule } from './material.module';
import { OrderByPipe } from './pipes';
import { ValidatorsModule } from './validators/validators.module';

@NgModule({
    declarations: [HighlightDirective, ZoomDirective, OrderByPipe],
    exports: [
        HighlightDirective,
        ZoomDirective,
        MaterialModule,
        OrderByPipe,
        CommonModule,
        FormsModule,
        ValidatorsModule,
        BrowserAnimationsModule,
    ],
})
export class SharedModule {
}
