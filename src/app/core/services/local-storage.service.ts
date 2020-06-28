import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    constructor() {
    }

    setItem(key: string, value: string | object): void {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string): string | {} {
        return JSON.parse(window.localStorage.getItem(key));
    }

    removeItem(key: string): void {
        window.localStorage.removeItem(key);
    }
}
