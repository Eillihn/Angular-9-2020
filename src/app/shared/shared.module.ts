import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight/highlight.directive';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [HighlightDirective],
    imports: [CommonModule, MaterialModule],
    exports: [HighlightDirective, MaterialModule],
})
export class SharedModule {}
