import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthService } from './../../../core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
    message: string;
    private unsubscribe: Subject<void> = new Subject();

    constructor(public authService: AuthService, private router: Router) {
    }

    ngOnDestroy() {
        this.unsubscribe.complete();
    }

    onLogin() {
        this.message = 'Trying to log in ...';
        const observer = {
            next: () => {
                this.setMessage();
                if (this.authService.isLoggedIn) {
                    const redirect = this.authService.redirectUrl
                        ? this.authService.redirectUrl
                        : '/admin';
                    this.router.navigate([redirect]);
                }
            },
            error: (err: any) => console.log(err),
        };
        this.authService
            .login()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(observer);
    }

    onLogout() {
        this.authService.logout();
        this.setMessage();
    }

    ngOnInit() {
        this.setMessage();
    }

    private setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }
}
