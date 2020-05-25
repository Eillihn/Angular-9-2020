import { InjectionToken } from '@angular/core';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const GeneratorService10 = new InjectionToken<string>('GeneratorService10');

function getRandomChar() {
    const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
    return Math.random() < 0.5 ? ch : ch.toLowerCase();
}

// Хотелось бы, чтобы это был класс
function GeneratorService(n: number): string {
    return Array.from({ length: n }, getRandomChar).join('');
}

// А тут этот класс использовался бы
function GeneratorServiceNFactory(n: number) {
    return GeneratorService.bind(null, n);
}

export { GeneratorService10, GeneratorServiceNFactory };
