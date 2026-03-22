import {computed, inject, Injectable, type Signal, signal} from '@angular/core';

import {type DfPanzoomModel} from './pan-zoom.interfaces';
import {
    DF_PAN_ZOOM_OPTIONS,
    type DfPanSize,
    type DfPanSizeDimensions,
    type DfPanZoomOptions,
} from './pan-zoom.options';

const INITIAL_CAMERA: DfPanzoomModel = {
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
    zoom: 1,
};

const DEFAULT_PAN_SIZE = 2000;

export interface DfPanZoomUsableRect {
    readonly minX: number;
    readonly minY: number;
    readonly maxX: number;
    readonly maxY: number;
}

@Injectable()
export class PanZoomService {
    private readonly panZoomOptions: DfPanZoomOptions =
        inject<DfPanZoomOptions>(DF_PAN_ZOOM_OPTIONS);

    private readonly cameraSignal = signal<DfPanzoomModel>(INITIAL_CAMERA);
    private readonly disabledSignal = signal<boolean>(false);
    private readonly panSizeSignal = signal<DfPanSizeDimensions>(
        toPanSizeDimensions(this.panZoomOptions.panSize),
    );

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
    public readonly panSize: Signal<DfPanSizeDimensions> =
        this.panSizeSignal.asReadonly();

    public readonly usableRect: Signal<DfPanZoomUsableRect> = computed(() => {
        const panSize = this.panSizeSignal();

        return {
            minX: -(panSize.width / 2),
            maxX: panSize.width / 2,
            minY: -(panSize.height / 2),
            maxY: panSize.height / 2,
        };
    });

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
}

function toPanSizeDimensions(panSize?: DfPanSize): DfPanSizeDimensions {
    if (typeof panSize === 'number' && Number.isFinite(panSize) && panSize > 0) {
        return {width: panSize, height: panSize};
    }

    if (panSize && typeof panSize === 'object') {
        const {width, height} = panSize;

        if (
            Number.isFinite(width) &&
            Number.isFinite(height) &&
            width > 0 &&
            height > 0
        ) {
            return {width, height};
        }
    }

    return {width: DEFAULT_PAN_SIZE, height: DEFAULT_PAN_SIZE};
}
