import {type FactoryProvider, InjectionToken} from '@angular/core';

export type DfWheelBehavior = 'scroll' | 'zoom';
export type DfPanSize = DfPanSizeDimensions | number;

export interface DfPanSizeDimensions {
    width: number;
    height: number;
}

export interface DfPanZoomBackgroundCanvasOptions {
    visible: boolean;
}

export interface DfPanZoomOptions {
    /**
     * @deprecated Dynamic workspace sizing ignores this option.
     * Kept only for backward compatibility and will be removed in a future major version.
     */
    panSize: DfPanSize;
    topPosition: number | null;
    leftPosition: number | null;
    minZoom: number;
    maxZoom: number;
    zoomStep: number;
    zoomAnimationDuration: number;
    zoomWheelSensitivity: number;
    touchSensitivity: number;
    wheelBehavior: DfWheelBehavior;
    wheelSpeed: number;
    wheelStep: number;
    pinchZoomSpeed: number;
    backgroundCanvas: DfPanZoomBackgroundCanvasOptions;
}

export const DF_PAN_ZOOM_DEFAULT_OPTIONS: DfPanZoomOptions = {
    panSize: 2000,
    topPosition: null,
    leftPosition: null,
    minZoom: 0.25,
    maxZoom: 3,
    zoomStep: 0.25,
    zoomAnimationDuration: 300,
    zoomWheelSensitivity: 0.01,
    touchSensitivity: 0.01,
    wheelBehavior: 'zoom',
    wheelSpeed: 1,
    wheelStep: 0.008,
    pinchZoomSpeed: 1,
    backgroundCanvas: {
        visible: true,
    },
};

export const DF_PAN_ZOOM_OPTIONS = new InjectionToken(
    '[DF_PAN_ZOOM_OPTIONS]: [PAN_ZOOM_OPTIONS]',
    {factory: () => DF_PAN_ZOOM_DEFAULT_OPTIONS},
);

export function dfPanZoomOptionsProvider(
    options: Partial<DfPanZoomOptions>,
): FactoryProvider {
    return {
        provide: DF_PAN_ZOOM_OPTIONS,
        useFactory: (): DfPanZoomOptions => ({
            ...DF_PAN_ZOOM_DEFAULT_OPTIONS,
            ...options,
            backgroundCanvas: {
                ...DF_PAN_ZOOM_DEFAULT_OPTIONS.backgroundCanvas,
                ...options.backgroundCanvas,
            },
        }),
    };
}
