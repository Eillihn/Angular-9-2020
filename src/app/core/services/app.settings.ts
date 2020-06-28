import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {LocalStorageService} from './local-storage.service';
import {Observable, Subject, throwError} from 'rxjs';
import {AppSettingsModel, AppTheme} from '../models';
import {catchError, finalize, map, publish, refCount, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AppSettings {
    private channel = new Subject<AppSettingsModel>();
    settings: AppSettingsModel;
    channel$: Observable<AppSettingsModel> = this.channel.asObservable();

    constructor(private localStorageService: LocalStorageService, private http: HttpClient) {
        this.settings = JSON.parse(localStorageService.getItem('APP_SETTINGS') as string) as AppSettingsModel;
        if (this.settings) {
            this.channel.next(this.settings);
        } else {
            this.settings = {} as AppSettingsModel;
            this.fetch();
        }
    }

    fetch(): void {
        this.http
            .get('/assets/app-settings.json')
            .pipe(retry(2),
                map((res: Response) => {
                    this.settings = (res || {}) as AppSettingsModel;
                    this.channel.next(this.settings);
                }),
                publish(),
                refCount(),
                finalize(() => this.settings = {} as AppSettingsModel),
                catchError(this.handleError));
    }

    setTheme(theme: AppTheme): void {
        this.settings.THEME = theme;
        this.localStorageService.setItem('APP_SETTINGS', JSON.stringify(this.settings));
        this.channel.next(this.settings);
    }

    private handleError(err: HttpErrorResponse) {
        if (err.error instanceof Error) {
            console.error('An error occurred:', err.error.message);
        } else {
            console.error(
                `Backend returned code ${err.status}, body was: ${err.error}`
            );
        }
        return throwError('Something bad happened; please try again later.');
    }
}
