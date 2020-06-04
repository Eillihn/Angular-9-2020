import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ZoomDirective } from './zoom.directive';

@Component({
    template: `<div appZoom></div>`,
})
class TestComponent {
}

describe('ZoomDirective', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ZoomDirective, TestComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });
});
