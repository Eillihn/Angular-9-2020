import { Component, OnInit } from '@angular/core';

enum Category {
    C1 = 'Test Category 1',
    C2 = 'Test Category 2',
}

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
    name: string = 'Test Name';
    description: string = 'Test Description';
    price: number = 123;
    category: Category = Category.C1;
    isAvailable: boolean = true;
    size: string[] = ['S', 'M', 'L'];

    constructor() {
    }

    ngOnInit(): void {
    }
}
