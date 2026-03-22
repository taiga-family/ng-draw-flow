import {dfClamp} from '../../helpers';
import {type DfPoint} from '../../ng-draw-flow.interfaces';
import {type DfPanzoomModel} from './pan-zoom.interfaces';
import {type DfPanSizeDimensions, type DfPanZoomOptions} from './pan-zoom.options';

export interface DfContainerOffsets {
    readonly offsetX: number;
    readonly offsetY: number;
    readonly translateX: number;
    readonly translateY: number;
}

export interface DfPanZoomUsableRectBounds {
    readonly minX: number;
    readonly minY: number;
    readonly maxX: number;
    readonly maxY: number;
}

export interface DfPanZoomWorldRectBounds {
    readonly minX: number;
    readonly minY: number;
    readonly maxX: number;
    readonly maxY: number;
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

export function clampByPanSize(
    camera: DfPanzoomModel,
    panSize: Pick<DfPanSizeDimensions, 'height' | 'width'>,
): DfPanzoomModel {
    const maxOffsetX = camera.zoom * panSize.width;
    const maxOffsetY = camera.zoom * panSize.height;

    return {
        ...camera,
        x: dfClamp(camera.x, -maxOffsetX, maxOffsetX),
        y: dfClamp(camera.y, -maxOffsetY, maxOffsetY),
    };
}

export function clampByUsableRect(
    camera: DfPanzoomModel,
    usableRect: DfPanZoomUsableRectBounds,
    viewportSize: Pick<DOMRectReadOnly, 'height' | 'width'>,
    zeroPoint: DfPoint,
): DfPanzoomModel {
    if (!viewportSize.width || !viewportSize.height || !camera.zoom) {
        return camera;
    }

    const minCameraX = -usableRect.maxX * camera.zoom - zeroPoint.x;
    const maxCameraX = -usableRect.minX * camera.zoom + viewportSize.width - zeroPoint.x;
    const minCameraY = -usableRect.maxY * camera.zoom - zeroPoint.y;
    const maxCameraY = -usableRect.minY * camera.zoom + viewportSize.height - zeroPoint.y;

    return {
        ...camera,
        x: dfClamp(
            camera.x,
            Math.min(minCameraX, maxCameraX),
            Math.max(minCameraX, maxCameraX),
        ),
        y: dfClamp(
            camera.y,
            Math.min(minCameraY, maxCameraY),
            Math.max(minCameraY, maxCameraY),
        ),
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
    panSize: Pick<DfPanSizeDimensions, 'height' | 'width'>,
): DfPoint {
    const halfOfPanWidth = panSize.width / 2;
    const halfOfPanHeight = panSize.height / 2;

    return {
        x: halfOfPanWidth + (camera.x * -1) / camera.zoom - halfOfPanWidth,
        y: halfOfPanHeight + (camera.y * -1) / camera.zoom - halfOfPanHeight,
    };
}

export function alignCameraToWorldRect(
    camera: DfPanzoomModel,
    targetRect: Pick<DfPanZoomWorldRectBounds, 'minX' | 'minY'>,
    viewportSize: Pick<DOMRectReadOnly, 'height' | 'width'>,
    options: Pick<DfPanZoomOptions, 'leftPosition' | 'topPosition'>,
): DfPanzoomModel {
    const zeroPoint = getViewportZeroPoint(viewportSize, options);

    return {
        ...camera,
        x:
            options.leftPosition === null
                ? camera.x
                : options.leftPosition - zeroPoint.x - targetRect.minX * camera.zoom,
        y:
            options.topPosition === null
                ? camera.y
                : options.topPosition - zeroPoint.y - targetRect.minY * camera.zoom,
    };
}
