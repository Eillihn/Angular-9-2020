import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    redirectUrl: string;
    isLoggedIn = false;

    login(): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap((val) => (this.isLoggedIn = val))
        );
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
