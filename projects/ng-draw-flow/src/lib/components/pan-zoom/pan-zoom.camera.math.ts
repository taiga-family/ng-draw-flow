import {dfClamp} from '../../helpers';
import {type DfPoint} from '../../ng-draw-flow.interfaces';
import {type DfPanzoomModel} from './pan-zoom.interfaces';
import {type DfPanZoomOptions} from './pan-zoom.options';

export interface DfContainerOffsets {
    readonly offsetX: number;
    readonly offsetY: number;
    readonly translateX: number;
    readonly translateY: number;
}

export function clampScale(scale: number, min: number, max: number): number {
    return dfClamp(scale, min, max);
}

export function moveBy(
    camera: DfPanzoomModel,
    deltaX: number,
    deltaY: number,
): DfPanzoomModel {
    return {
        ...camera,
        x: camera.x + deltaX,
        y: camera.y + deltaY,
    };
}

export function clampByPanSize(camera: DfPanzoomModel, panSize: number): DfPanzoomModel {
    const maxOffset = camera.zoom * panSize;

    return {
        ...camera,
        x: dfClamp(camera.x, -maxOffset, maxOffset),
        y: dfClamp(camera.y, -maxOffset, maxOffset),
    };
}

export function zoomAtPoint(
    camera: DfPanzoomModel,
    point: DfPoint,
    targetScale: number,
    options: Pick<DfPanZoomOptions, 'maxZoom' | 'minZoom'>,
): DfPanzoomModel {
    const zoom = clampScale(targetScale, options.minZoom, options.maxZoom);

    const dx = (point.x - camera.x) / camera.zoom;
    const dy = (point.y - camera.y) / camera.zoom;
    const dxNext = (point.x - camera.x) / zoom;
    const dyNext = (point.y - camera.y) / zoom;

    return {
        ...camera,
        x: camera.x + (dxNext - dx) * zoom,
        y: camera.y + (dyNext - dy) * zoom,
        zoom,
    };
}

export function getViewportZeroPoint(
    rootSize: Pick<DOMRectReadOnly, 'height' | 'width'>,
    options: Pick<DfPanZoomOptions, 'leftPosition' | 'topPosition'>,
): DfPoint {
    return {
        x: options.leftPosition ?? rootSize.width / 2,
        y: options.topPosition ?? rootSize.height / 2,
    };
}

export function getContainerOffsets(
    rootSize: Pick<DOMRectReadOnly, 'height' | 'width'>,
    options: Pick<DfPanZoomOptions, 'leftPosition' | 'topPosition'>,
): DfContainerOffsets {
    const zeroPoint = getViewportZeroPoint(rootSize, options);
    const translateX = zeroPoint.x - rootSize.width / 2;
    const translateY = zeroPoint.y - rootSize.height / 2;

    return {
        offsetX: -translateX,
        offsetY: -translateY,
        translateX,
        translateY,
    };
}

export function getViewportCenter(
    camera: Pick<DfPanzoomModel, 'x' | 'y' | 'zoom'>,
    panSize: number,
): DfPoint {
    const halfOfPanSize = panSize / 2;

    return {
        x: halfOfPanSize + (camera.x * -1) / camera.zoom - halfOfPanSize,
        y: halfOfPanSize + (camera.y * -1) / camera.zoom - halfOfPanSize,
    };
}
