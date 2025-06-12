import {Directive, ElementRef, HostListener, inject} from '@angular/core';

import {D3ZoomService} from './d3-zoom.service';

@Directive({
    standalone: true,
    selector: '[dfD3Zoom]',
    host: {
        '[style.touch-action]': '"none"',
        '[style.transform-origin]': '"0 0"',
    },
})
export class D3ZoomDirective {
    private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
    protected readonly zoom = inject(D3ZoomService);

    @HostListener('pointerdown', ['$event'])
    protected onPointerDown(event: PointerEvent): void {
        if (event.button !== 0) {
            return;
        }

        if (event.target && 'setPointerCapture' in event.target) {
            (event.target as Element).setPointerCapture(event.pointerId);
        }

        let startX = event.clientX;
        let startY = event.clientY;
        const el = this.element.nativeElement;

        const move = (e: PointerEvent): void => {
            this.zoom.panBy(e.clientX - startX, e.clientY - startY);
            startX = e.clientX;
            startY = e.clientY;
        };

        const up = (e: PointerEvent): void => {
            el.removeEventListener('pointermove', move);
            el.removeEventListener('pointerup', up);

            if (e.target && 'releasePointerCapture' in e.target) {
                (e.target as Element).releasePointerCapture(e.pointerId);
            }
        };

        el.addEventListener('pointermove', move);
        el.addEventListener('pointerup', up);
    }

    @HostListener('wheel', ['$event'])
    protected onWheel(event: WheelEvent): void {
        event.preventDefault();

        const rect = this.element.nativeElement.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        const cx = offsetX >= 0 && offsetX <= rect.width ? offsetX : rect.width / 2;
        const cy = offsetY >= 0 && offsetY <= rect.height ? offsetY : rect.height / 2;

        const scale = 1 - event.deltaY * 0.001;

        this.zoom.zoomBy(scale, cx, cy);
    }
}
