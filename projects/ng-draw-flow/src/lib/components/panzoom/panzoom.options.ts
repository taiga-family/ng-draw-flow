import type {FactoryProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';

export interface DfPanzoomOptions {
    panSize: number;
    topPosition: number | null;
    leftPosition: number | null;
    minZoom: number;
    maxZoom: number;
    zoomStep: number;
    zoomAnimationDuration: number;
    zoomWheelSensitivity: number;
    touchSensitivity: number;
}

export const DF_PANZOOM_DEFAULT_OPTIONS: DfPanzoomOptions = {
    panSize: 20000,
    topPosition: null,
    leftPosition: null,
    minZoom: 0.25,
    maxZoom: 3,
    zoomStep: 0.25,
    zoomAnimationDuration: 300,
    zoomWheelSensitivity: 0.01,
    touchSensitivity: 0.01,
};

export const DF_PANZOOM_OPTIONS = new InjectionToken(
    '[DF_PANZOOM_OPTIONS]: [PANZOOM_OPTIONS]',
    {
        factory: () => DF_PANZOOM_DEFAULT_OPTIONS,
    },
);

export function dfPanzoomOptionsProvider(
    options: Partial<DfPanzoomOptions>,
): FactoryProvider {
    return {
        provide: DF_PANZOOM_OPTIONS,
        useFactory: (): DfPanzoomOptions => ({
            ...DF_PANZOOM_DEFAULT_OPTIONS,
            ...options,
        }),
    };
}
