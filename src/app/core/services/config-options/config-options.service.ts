import { Injectable } from '@angular/core';

import { ConfigOption } from 'src/app/core/models';

@Injectable()
export class ConfigOptionsService {
    private config: ConfigOption;

    constructor() {
    }

    setOptions(cfg: ConfigOption) {
        this.config = {...this.config, ...cfg};
    }

    getOptions(): ConfigOption {
        return this.config;
    }
}
