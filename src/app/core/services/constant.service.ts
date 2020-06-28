import { InjectionToken } from '@angular/core';

import { AppConfig } from 'src/app/core/models/app-config.model';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const ConstantService: AppConfig = {
    App: 'Shop',
    Ver: '1.0',
};
