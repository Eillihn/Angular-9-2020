import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [],
    imports: [],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatBadgeModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatSelectModule,
    ],
})
export class MaterialModule {}
