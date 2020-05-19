import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight/highlight.directive';
import { ZoomDirective } from './zoom/zoom.directive';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [HighlightDirective, ZoomDirective],
    imports: [CommonModule, MaterialModule],
    exports: [HighlightDirective, ZoomDirective, MaterialModule],
})
export class SharedModule {}
