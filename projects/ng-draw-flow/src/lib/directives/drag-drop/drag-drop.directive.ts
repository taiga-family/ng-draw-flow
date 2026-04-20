import {Directive, ElementRef, inject} from '@angular/core';

import {DragDropService} from './drag-drop.service';

@Directive({
    standalone: true,
    selector: '[dfDragDrop]',
    outputs: ['dfDragDrop'],
})
export class DragDropDirective {
    protected readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);

    protected readonly dfDragDrop = inject(DragDropService).streamFor(
        this.elementRef.nativeElement,
    );
}
