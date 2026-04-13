import {computed, Injectable, type Signal, signal} from '@angular/core';

import {type DfPoint} from '../../ng-draw-flow.interfaces';
import {
    type DfPanZoomBounds,
    type DfPanZoomTrackedBounds,
    PanZoomBoundsTracker,
} from './pan-zoom.bounds-tracker';
import {type DfPanzoomModel} from './pan-zoom.interfaces';
import {type DfPanSizeDimensions} from './pan-zoom.options';

const INITIAL_CAMERA: DfPanzoomModel = {
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
    zoom: 1,
};

const DEFAULT_WORKSPACE_GAP = 400;

export interface DfPanZoomUsableRect {
    readonly minX: number;
    readonly minY: number;
    readonly maxX: number;
    readonly maxY: number;
}

export interface DfPanZoomWorkspaceRect extends DfPanZoomUsableRect {
    readonly width: number;
    readonly height: number;
}

@Injectable()
export class PanZoomService {
    private readonly cameraSignal = signal<DfPanzoomModel>(INITIAL_CAMERA);
    private readonly disabledSignal = signal<boolean>(false);
    private readonly trackedNodesCountSignal = signal<number>(0);
    private readonly usableRectSignal = signal<DfPanZoomUsableRect>({
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0,
    });

    private readonly boundsTracker = new PanZoomBoundsTracker();
    private readonly nodeBounds = new Map<string, DfPanZoomTrackedBounds>();

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

            this.patchCamera({[property]: value} as Partial<DfPanzoomModel>);

            return true;
        },
        ownKeys: (): ArrayLike<string | symbol> => Reflect.ownKeys(this.cameraSignal()),
        getOwnPropertyDescriptor: (_target, property) => {
            if (typeof property !== 'string') {
                return;
            }

            return {
                enumerable: true,
                configurable: true,
                writable: true,
                value: this.cameraSignal()[property as keyof DfPanzoomModel],
            };
        },
    });

    public readonly camera = this.cameraSignal.asReadonly();

    public readonly disabled = this.disabledSignal.asReadonly();

    public readonly usableRect = this.usableRectSignal.asReadonly();

    public readonly workspaceRect: Signal<DfPanZoomWorkspaceRect> = computed(() => {
        const usableRect = this.usableRectSignal();

        if (!this.trackedNodesCountSignal()) {
            return toWorkspaceRect({
                minX: -DEFAULT_WORKSPACE_GAP,
                minY: -DEFAULT_WORKSPACE_GAP,
                maxX: DEFAULT_WORKSPACE_GAP,
                maxY: DEFAULT_WORKSPACE_GAP,
            });
        }

        return toWorkspaceRect({
            minX: usableRect.minX - DEFAULT_WORKSPACE_GAP,
            minY: usableRect.minY - DEFAULT_WORKSPACE_GAP,
            maxX: usableRect.maxX + DEFAULT_WORKSPACE_GAP,
            maxY: usableRect.maxY + DEFAULT_WORKSPACE_GAP,
        });
    });

    public readonly panSize: Signal<DfPanSizeDimensions> = computed(() => {
        const workspaceRect = this.workspaceRect();

        return {
            width: workspaceRect.width,
            height: workspaceRect.height,
        };
    });

    public readonly workspaceOrigin: Signal<DfPoint> = computed(() => {
        const workspaceRect = this.workspaceRect();

        return {
            x: -workspaceRect.minX,
            y: -workspaceRect.minY,
        };
    });

    public readonly workspaceCenter: Signal<DfPoint> = computed(() => {
        const workspaceRect = this.workspaceRect();

        return {
            x: workspaceRect.minX + workspaceRect.width / 2,
            y: workspaceRect.minY + workspaceRect.height / 2,
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

    public upsertNodeBounds(id: string, bounds: DfPanZoomBounds): void {
        const tracked = this.nodeBounds.get(id);

        if (tracked) {
            this.boundsTracker.update(tracked, bounds);
        } else {
            const item = {id, ...bounds};

            this.nodeBounds.set(id, item);
            this.boundsTracker.add(item);
            this.trackedNodesCountSignal.set(this.nodeBounds.size);
        }

        this.syncUsableRect();
    }

    public removeNodeBounds(id: string): void {
        const tracked = this.nodeBounds.get(id);

        if (!tracked) {
            return;
        }

        this.boundsTracker.remove(tracked);
        this.nodeBounds.delete(id);
        this.trackedNodesCountSignal.set(this.nodeBounds.size);
        this.syncUsableRect();
    }

    public getBoundsForNodeIds(ids: readonly string[]): DfPanZoomUsableRect | null {
        if (!ids.length) {
            return null;
        }

        let minX = Number.POSITIVE_INFINITY;
        let minY = Number.POSITIVE_INFINITY;
        let maxX = Number.NEGATIVE_INFINITY;
        let maxY = Number.NEGATIVE_INFINITY;

        for (const id of ids) {
            const bounds = this.nodeBounds.get(id);

            if (!bounds) {
                return null;
            }

            minX = Math.min(minX, bounds.minX);
            minY = Math.min(minY, bounds.minY);
            maxX = Math.max(maxX, bounds.maxX);
            maxY = Math.max(maxY, bounds.maxY);
        }

        return {minX, minY, maxX, maxY};
    }

    private syncUsableRect(): void {
        const rect = this.boundsTracker.toJSON();
        const nextRect = {
            minX: rect.minX,
            minY: rect.minY,
            maxX: rect.maxX,
            maxY: rect.maxY,
        };
        const currentRect = this.usableRectSignal();

        if (
            currentRect.minX === nextRect.minX &&
            currentRect.minY === nextRect.minY &&
            currentRect.maxX === nextRect.maxX &&
            currentRect.maxY === nextRect.maxY
        ) {
            return;
        }

        this.usableRectSignal.set(nextRect);
    }
}

function toWorkspaceRect(bounds: DfPanZoomBounds): DfPanZoomWorkspaceRect {
    return {
        ...bounds,
        width: bounds.maxX - bounds.minX,
        height: bounds.maxY - bounds.minY,
    };
}
