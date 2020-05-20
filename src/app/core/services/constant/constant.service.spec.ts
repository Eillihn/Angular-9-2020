import { TestBed } from '@angular/core/testing';

import { APP_CONFIG, ConstantService } from './constant.service';
import { AppConfig } from 'src/app/core/models';

describe('ConstantService', () => {
    let service: AppConfig;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: APP_CONFIG, useValue: ConstantService }],
        });
        service = TestBed.inject(APP_CONFIG);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
