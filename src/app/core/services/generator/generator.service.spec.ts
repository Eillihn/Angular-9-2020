import { TestBed } from '@angular/core/testing';

import {
    GeneratorServiceNFactory,
    GeneratorService10,
} from './generator.service';

describe('GeneratorService', () => {
    let service: string;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: GeneratorService10,
                    useFactory: GeneratorServiceNFactory(10),
                },
            ],
        });
        service = TestBed.inject(GeneratorService10);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
