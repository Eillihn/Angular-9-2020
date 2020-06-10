import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppSettings} from './core/services';
import {AppSettingsModel} from './core/models/app-settings.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('appTitle') appTitle: ElementRef<HTMLInputElement>;
    isDarkTheme: boolean;

    constructor(private appSettings: AppSettings) {
    }

    ngOnInit(): void {
        this.setIsDarkTheme(this.appSettings.settings);
        this.appSettings.channel$.subscribe(this.setIsDarkTheme.bind(this));
    }

    setIsDarkTheme(settings: AppSettingsModel): void {
        this.isDarkTheme = settings.THEME === 'DARK';
    }

    ngAfterViewInit() {
        if (this.appTitle) {
            this.appTitle.nativeElement.textContent = 'Shop';
        }
    }
}
