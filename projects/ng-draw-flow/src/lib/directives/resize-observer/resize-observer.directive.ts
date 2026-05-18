import {Directive, ElementRef, inject} from '@angular/core';
import { RESIZE_OPTION_BOX, RESIZE_OPTION_BOX_DEFAULT, WaResizeObserverService } from '@ng-web-apis/resize-observer';

/**
 * @deprecated: internal use only
 * TODO: Remove this directive after EOL Taiga UI 3
 */
@Directive({
    standalone: true,
    selector: '[dfResizeObserver]',
    inputs: ['dfResizeBox: box'],
    outputs: ['dfResizeObserver'],
    providers: [
        WaResizeObserverService,
        {
            provide: RESIZE_OPTION_BOX,
            useFactory: (): ResizeObserverBoxOptions =>
                inject(ElementRef).nativeElement.getAttribute('dfResizeBox') ||
                RESIZE_OPTION_BOX_DEFAULT,
        },
    ],
})
export class DfResizeObserver {
    protected readonly dfResizeObserver = inject(WaResizeObserverService);
    public box: ResizeObserverBoxOptions = RESIZE_OPTION_BOX_DEFAULT;
}
