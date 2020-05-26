import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
})
export class HighlightDirective {
    @HostBinding('class')
    attrClass: string;

    constructor() {}

    @HostListener('mouseenter', ['$event'])
    enter() {
        this.attrClass = 'highlight';
    }

    @HostListener('mouseleave', ['$event'])
    leave() {
        this.attrClass = '';
    }
}
