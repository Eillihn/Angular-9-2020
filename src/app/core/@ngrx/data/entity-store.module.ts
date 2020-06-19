import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultDataServiceConfig, EntityDataModule, EntityMetadataMap } from '@ngrx/data';
import { Order } from 'src/app/core/models';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: 'http://localhost:3000/'
};

const pluralNames = {
    Order: 'Order'
};

export const entityMetadata: EntityMetadataMap = {
    Order: {}
};

@NgModule({
    imports: [
        CommonModule,
        EntityDataModule.forRoot({ entityMetadata, pluralNames })
    ],
    providers: [
        { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
    ]
})
export class EntityStoreModule {
}
