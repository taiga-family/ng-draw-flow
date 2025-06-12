import type {WritableSignal} from '@angular/core';
import {Injectable, signal} from '@angular/core';

import type {DfZoomTransform} from './zoom.interfaces';

@Injectable({providedIn: 'root'})
export class D3ZoomService {
    private readonly transformSignal: WritableSignal<DfZoomTransform> = signal({
        position: {x: 0, y: 0},
        scale: 1,
    });

    public readonly transform = this.transformSignal.asReadonly();

    public panBy(dx: number, dy: number): void {
        const t = this.transformSignal();

        this.transformSignal.set({
            position: {
                x: t.position.x + dx,
                y: t.position.y + dy,
            },
            scale: t.scale,
        });
    }

    public zoomBy(scale: number, cx = 0, cy = 0): void {
        const t = this.transformSignal();
        const s = t.scale * scale;
        const x = (t.position.x - cx) * scale + cx;
        const y = (t.position.y - cy) * scale + cy;

        this.transformSignal.set({
            position: {x, y},
            scale: s,
        });
    }

    public reset(): void {
        this.transformSignal.set({position: {x: 0, y: 0}, scale: 1});
    }
}
