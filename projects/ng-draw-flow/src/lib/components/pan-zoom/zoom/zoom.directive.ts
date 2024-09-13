import {Directive, inject} from '@angular/core';

import {ZoomService} from './zoom.service';

@Directive({
    standalone: true,
    selector: '[dfZoom]',
    outputs: ['dfZoom'],
    providers: [ZoomService],
    host: {
        '[style.touch-action]': '"none"',
    },
})
export class ZoomDirective {
    protected readonly dfZoom = inject(ZoomService);
}
