import { Directive, Input, ElementRef, HostListener, OnChanges } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[editable]'
})
export class EditableDirective implements OnChanges {

    private _boundElement;

    @Input() editable: boolean;
    @Input() binding: object;
    // TODO: try to figure out how / if possible to eliminate property, and bind two-way to obj.propname
    @Input() property: string;

    @HostListener('blur') onBlur() {
        this.binding[this.property] = this._boundElement.innerText;
    }

    constructor(private element: ElementRef) { }

    ngOnChanges() {
        this._boundElement = this.element.nativeElement;
        this._boundElement.contentEditable = this.editable;

        if (this.binding && this.property) {
            this._boundElement.textContent = this.binding[this.property];
        }
    }

}
