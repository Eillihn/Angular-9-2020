import { Directive } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { catchError, debounceTime, distinctUntilChanged, first, map } from 'rxjs/operators';
import { Order } from 'src/app/core';

@Directive({
    selector: '[appAsyncEmailValidator][formControlName]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: AsyncEmailValidatorDirective,
            multi: true
        }
    ]
})
export class AsyncEmailValidatorDirective implements Validator {
    private ordersService: EntityCollectionService<Order>;

    constructor(entityServices: EntityServices) {
        this.ordersService = entityServices.getEntityCollectionService('Order');
    }

    validate(c: AbstractControl): Observable<{ [key: string]: any }> {
        return this.asyncEmailValidator(c.value)
            .pipe(
                debounceTime(1000),
                distinctUntilChanged(),
                first()
            );
    }

    asyncEmailValidator(email: string): | Observable<ValidationErrors | null> {
        return this.ordersService.getWithQuery({ email })
            .pipe(
                map((emails: Order[]) => {
                    return emails.length ? { asyncEmailInvalid: true } : null;
                }),
                catchError(() => of(null))
            );
    }
}
