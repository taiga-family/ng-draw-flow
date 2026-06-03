import {Directive, ElementRef, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';

import {DragDropService} from './drag-drop.service';

@Directive({
    standalone: true,
    selector: '[dfDragDrop]',
})
export class DragDropDirective {
    protected readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
    protected readonly dfDragDrop = outputFromObservable(
        inject(DragDropService).streamFor(this.elementRef.nativeElement),
        {alias: 'dfDragDrop'},
    );
}
