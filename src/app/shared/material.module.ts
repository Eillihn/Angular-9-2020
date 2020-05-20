import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
    declarations: [], // Если нет деклараций, которые используют импортрированные модули, то массив импортов можно не делать
    // imports: [
    //     CommonModule,
    //     MatToolbarModule,
    //     MatIconModule,
    //     MatBadgeModule,
    //     MatCardModule,
    //     MatButtonModule,
    //     MatListModule,
    // ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
    ],
})
export class MaterialModule {}
