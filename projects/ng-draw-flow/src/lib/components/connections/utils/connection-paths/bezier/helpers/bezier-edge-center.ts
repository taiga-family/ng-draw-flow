import {type DfPoint} from '../../../../../../ng-draw-flow.interfaces';

export function getBezierEdgeCenter({
    source,
    target,
    sourceControlPoint,
    targetControlPoint,
}: {
    source: DfPoint;
    target: DfPoint;
    sourceControlPoint: DfPoint;
    targetControlPoint: DfPoint;
}): [number, number, number, number] {
    const centerX =
        source.x * 0.125 +
        sourceControlPoint.x * 0.375 +
        targetControlPoint.x * 0.375 +
        target.x * 0.125;
    const centerY =
        source.y * 0.125 +
        sourceControlPoint.y * 0.375 +
        targetControlPoint.y * 0.375 +
        target.y * 0.125;
    const offsetX = Math.abs(centerX - source.x);
    const offsetY = Math.abs(centerY - source.y);

    return [centerX, centerY, offsetX, offsetY];
}
