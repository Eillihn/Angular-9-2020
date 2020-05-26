import { Component, OnInit, Inject, Optional } from '@angular/core';

import {
    CartService,
    LocalStorageService,
    ConfigOptionsService,
    ConstantService,
    APP_CONFIG,
    GeneratorServiceNFactory,
    GeneratorService,
    GENERATOR_SERVICE_TOKEN,
} from 'src/app/core/services';
import { AppConfig } from 'src/app/core/models';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    providers: [
        { provide: LocalStorageService, useClass: LocalStorageService },
        { provide: ConfigOptionsService, useClass: ConfigOptionsService },
        { provide: APP_CONFIG, useValue: ConstantService },
        {
            provide: GENERATOR_SERVICE_TOKEN,
            useFactory: GeneratorServiceNFactory.bind(null, 10),
        },
    ],
})
export class AboutComponent implements OnInit {
    constructor(
        @Optional() public cartService: CartService,
        @Optional() public localStorageService: LocalStorageService,
        @Optional() public configOptionsService: ConfigOptionsService,
        @Inject(APP_CONFIG) @Optional() public config: AppConfig,
        @Inject(GENERATOR_SERVICE_TOKEN) public generator: GeneratorService
    ) {}

    ngOnInit(): void {
        this.localStorageService.setItem('TEST', 'TEST');

        this.configOptionsService.setOptions({
            id: 1,
            login: 'login1',
            email: 'email',
        });
        this.configOptionsService.setOptions({
            login: 'login2',
        });
    }
}
