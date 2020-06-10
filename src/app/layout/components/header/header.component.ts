import {Component, OnInit} from '@angular/core';
import {AppSettings} from 'src/app/core/services';

import {AppSettingsModel, AppTheme} from 'src/app/core/models';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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


    toggleDarkTheme(): void {
        this.isDarkTheme = !this.isDarkTheme;
        this.appSettings.setTheme(this.isDarkTheme ? AppTheme.DARK : AppTheme.LIGHT);
    }
}

