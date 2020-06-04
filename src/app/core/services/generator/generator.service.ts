import { InjectionToken } from '@angular/core';

const GENERATOR_SERVICE_TOKEN = new InjectionToken<GeneratorService>(
    'GENERATOR_SERVICE_TOKEN'
);

class GeneratorService {
    CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    generatedValue: string;

    constructor(public n: number) {
        this.generatedValue = Array.from(
            {length: n},
            this.getRandomChar.bind(this)
        ).join('');
    }

    getRandomChar() {
        const ch = this.CHARS[Math.floor(Math.random() * this.CHARS.length)];
        return Math.random() < 0.5 ? ch : ch.toLowerCase();
    }
}

function GeneratorServiceNFactory(n: number) {
    return new GeneratorService(n);
}

export { GENERATOR_SERVICE_TOKEN, GeneratorService, GeneratorServiceNFactory };
