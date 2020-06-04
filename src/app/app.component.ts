import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    @ViewChild('appTitle') appTitle: ElementRef<HTMLInputElement>;

    constructor() {
    }

    ngAfterViewInit() {
        if (this.appTitle) {
            this.appTitle.nativeElement.textContent = 'Shop';
        }
    }
}
