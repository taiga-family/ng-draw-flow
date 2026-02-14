import {inject, Injectable, type Signal, signal} from '@angular/core';

import {type DfPanzoomModel} from './pan-zoom.interfaces';
import {DF_PAN_ZOOM_OPTIONS, type DfPanZoomOptions} from './pan-zoom.options';

const INITIAL_CAMERA: DfPanzoomModel = {
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
    zoom: 1,
};

const USABLE_RECT_GAP = 400;
const DEFAULT_BASE_PAN_SIZE = 1000;

interface DfPanZoomNodeBounds {
    readonly minX: number;
    readonly minY: number;
    readonly maxX: number;
    readonly maxY: number;
}

@Injectable()
export class PanZoomService {
    private readonly panZoomOptions: DfPanZoomOptions =
        inject<DfPanZoomOptions>(DF_PAN_ZOOM_OPTIONS);

    private readonly basePanSize = this.panZoomOptions.panSize ?? DEFAULT_BASE_PAN_SIZE;

    private readonly cameraSignal = signal<DfPanzoomModel>(INITIAL_CAMERA);
    private readonly disabledSignal = signal<boolean>(false);
    private readonly panSizeSignal = signal<number>(this.basePanSize);
    private readonly nodeBounds = new Map<string, DfPanZoomNodeBounds>();

    private readonly legacyModelProxy = new Proxy({} as DfPanzoomModel, {
        get: (_target, property): unknown => {
            if (typeof property !== 'string') {
                return undefined;
            }

            return this.cameraSignal()[property as keyof DfPanzoomModel];
        },
        set: (_target, property, value): boolean => {
            if (typeof property !== 'string') {
                return false;
            }

            this.patchCamera({
                [property]: value,
            } as Partial<DfPanzoomModel>);

            return true;
        },
        ownKeys: (): ArrayLike<string | symbol> => {
            return Reflect.ownKeys(this.cameraSignal());
        },
        getOwnPropertyDescriptor: (_target, property) => {
            if (typeof property !== 'string') {
                return undefined;
            }

            return {
                enumerable: true,
                configurable: true,
                writable: true,
                value: this.cameraSignal()[property as keyof DfPanzoomModel],
            };
        },
    });

    public readonly camera: Signal<DfPanzoomModel> = this.cameraSignal.asReadonly();

    public readonly disabled: Signal<boolean> = this.disabledSignal.asReadonly();
    public readonly panSize: Signal<number> = this.panSizeSignal.asReadonly();

    /** @deprecated Backward-compatible mutable camera access */
    public get panzoomModel(): DfPanzoomModel {
        return this.legacyModelProxy;
    }

    public set panzoomModel(model: DfPanzoomModel) {
        this.setCamera(model);
    }

    /** @deprecated Backward-compatible mutable flag access */
    public get panzoomDisabled(): boolean {
        return this.disabledSignal();
    }

    public set panzoomDisabled(value: boolean) {
        this.setDisabled(value);
    }

    public snapshot(): DfPanzoomModel {
        return this.cameraSignal();
    }

    public setCamera(camera: DfPanzoomModel): void {
        this.cameraSignal.set({...camera});
    }

    public patchCamera(camera: Partial<DfPanzoomModel>): void {
        this.cameraSignal.update((current) => ({...current, ...camera}));
    }

    public setDisabled(value: boolean): void {
        this.disabledSignal.set(value);
    }

    public isDisabled(): boolean {
        return this.disabledSignal();
    }

    public setNodeBounds(
        nodeId: string,
        bounds: {minX: number; minY: number; maxX: number; maxY: number},
    ): void {
        this.nodeBounds.set(nodeId, bounds);
        this.recalculatePanSize();
    }

    public removeNodeBounds(nodeId: string): void {
        if (this.nodeBounds.delete(nodeId)) {
            this.recalculatePanSize();
        }
    }

    private recalculatePanSize(): void {
        const baseHalf = this.basePanSize / 2;

        if (!this.nodeBounds.size) {
            this.panSizeSignal.set(this.basePanSize);

            return;
        }

        let minX = Number.POSITIVE_INFINITY;
        let minY = Number.POSITIVE_INFINITY;
        let maxX = Number.NEGATIVE_INFINITY;
        let maxY = Number.NEGATIVE_INFINITY;

        for (const bounds of this.nodeBounds.values()) {
            if (bounds.minX < minX) {
                minX = bounds.minX;
            }

            if (bounds.minY < minY) {
                minY = bounds.minY;
            }

            if (bounds.maxX > maxX) {
                maxX = bounds.maxX;
            }

            if (bounds.maxY > maxY) {
                maxY = bounds.maxY;
            }
        }

        const requiredHalf = Math.max(
            Math.abs(minX - USABLE_RECT_GAP),
            Math.abs(maxX + USABLE_RECT_GAP),
            Math.abs(minY - USABLE_RECT_GAP),
            Math.abs(maxY + USABLE_RECT_GAP),
            baseHalf,
        );
        const nextPanSize = Math.ceil(requiredHalf * 2);

        if (nextPanSize !== this.panSizeSignal()) {
            this.panSizeSignal.set(nextPanSize);
        }
    }
}
