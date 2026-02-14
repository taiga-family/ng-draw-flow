import {Injectable, type Signal, signal} from '@angular/core';

import {type DfPanzoomModel} from './pan-zoom.interfaces';

const INITIAL_CAMERA: DfPanzoomModel = {
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
    zoom: 1,
};

@Injectable()
export class PanZoomService {
    private readonly cameraSignal = signal<DfPanzoomModel>(INITIAL_CAMERA);
    private readonly disabledSignal = signal<boolean>(false);

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
