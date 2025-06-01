import type {DfPoint} from '../../../ng-draw-flow.interfaces';

export function calculateDistance(sourcePoint: DfPoint, targetPoint: DfPoint): number {
    return Math.sqrt(
        (targetPoint.x - sourcePoint.x) ** 2 + (targetPoint.y - sourcePoint.y) ** 2,
    );
}
