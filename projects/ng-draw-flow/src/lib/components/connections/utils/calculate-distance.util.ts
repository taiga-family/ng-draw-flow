import type {DfPoint} from '../../../ng-draw-flow.interfaces';

export const calculateDistance = (source: DfPoint, target: DfPoint): number =>
    Math.hypot(target.x - source.x, target.y - source.y);
