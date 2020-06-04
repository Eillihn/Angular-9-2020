import { Directive, ElementRef, HostListener, Input, Renderer2, } from '@angular/core';

@Directive({
    selector: '[appZoom]',
})
export class ZoomDirective {
    @Input('appZoom') fontSize: number;

    constructor(private el: ElementRef, private render: Renderer2) {
    }

    @HostListener('click') onClick() {
        const hasFontSize = this.el.nativeElement.style.fontSize;
        this.zoom(hasFontSize ? '' : (this.fontSize || 40) + 'px');
    }

    private zoom(fontSize: string) {
        this.render.setStyle(this.el.nativeElement, 'fontSize', fontSize);
    }
}
