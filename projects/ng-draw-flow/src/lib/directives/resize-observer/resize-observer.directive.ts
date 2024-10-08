import {Directive, ElementRef, inject} from '@angular/core';

import {ResizeObserverService} from './services/resize-observer.service';
import {
    DF_RESIZE_OPTION_BOX,
    DF_RESIZE_OPTION_BOX_DEFAULT,
} from './tokens/resize-option-box';

@Directive({
    standalone: true,
    selector: '[dfResizeObserver]',
    inputs: ['dfResizeBox: box'],
    outputs: ['dfResizeObserver'],
    providers: [
        ResizeObserverService,
        {
            provide: DF_RESIZE_OPTION_BOX,
            useFactory: (): ResizeObserverBoxOptions =>
                inject(ElementRef).nativeElement.getAttribute('dfResizeBox') ||
                DF_RESIZE_OPTION_BOX_DEFAULT,
        },
    ],
})
export class DfResizeObserver {
    protected readonly dfResizeObserver = inject(ResizeObserverService);

    public box: ResizeObserverBoxOptions = DF_RESIZE_OPTION_BOX_DEFAULT;
}
