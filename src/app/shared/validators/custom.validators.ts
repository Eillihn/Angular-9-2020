import { AbstractControl, ValidationErrors } from '@angular/forms';

export function checkFirstName(c: AbstractControl): ValidationErrors | null {
    if (c.value !== undefined && typeof c.value === 'string' && c.value.length < 3) {
        return {
            firstName: true
        };
    }
    return null;
}

export function checkEmail(c: AbstractControl): ValidationErrors | null {
    if (c.value !== undefined && typeof c.value === 'string' && c.value.length < 3) {
        return /[a-z0-9._%+-]+@[a-z0-9.-]+/.test(c.value) ? null : { email: true };
    }
    return null;
}

export class CustomValidators {
    static firstName(c: AbstractControl): ValidationErrors | null {
        return checkFirstName(c);
    }

    static email(c: AbstractControl): ValidationErrors | null {
        return checkEmail(c);
    }
}
