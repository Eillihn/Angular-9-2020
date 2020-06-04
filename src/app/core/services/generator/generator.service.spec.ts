import { TestBed } from '@angular/core/testing';

import { GENERATOR_SERVICE_TOKEN, GeneratorService, GeneratorServiceNFactory, } from './generator.service';

describe('GeneratorService', () => {
    let service: GeneratorService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: GENERATOR_SERVICE_TOKEN,
                    useFactory: GeneratorServiceNFactory.bind(null, 10),
                },
            ],
        });
        service = TestBed.inject(GENERATOR_SERVICE_TOKEN);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
