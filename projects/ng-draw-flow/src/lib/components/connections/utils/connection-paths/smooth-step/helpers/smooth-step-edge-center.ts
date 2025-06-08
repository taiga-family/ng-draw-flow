import type {DfPoint} from '../../../../../../ng-draw-flow.interfaces';

/**
 * Computes the geometric centre between two endpoints **and**
 * returns the half-length (offset) on each axis.
 *
 * Tuple structure:
 *   [centreX, centreY, offsetX, offsetY]
 *
 * These values are later used for label placement and
 * “long-edge” detection in the renderer.
 */
export function getSmoothStepEdgeCenter({
    source,
    target,
}: {
    source: DfPoint;
    target: DfPoint;
}): [number, number, number, number] {
    // Half of the absolute distance on each axis (always positive)
    const offsetX = Math.abs(source.x - target.x) / 2;
    const offsetY = Math.abs(source.y - target.y) / 2;

    // Add the offset to the smaller coordinate on each axis
    const centreX = target.x < source.x ? target.x + offsetX : source.x + offsetX;
    const centreY = target.y < source.y ? target.y + offsetY : source.y + offsetY;

    return [centreX, centreY, offsetX, offsetY];
}
