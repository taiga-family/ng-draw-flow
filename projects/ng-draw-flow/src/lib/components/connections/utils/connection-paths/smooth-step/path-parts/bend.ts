import {type DfPoint} from '../../../../../../ng-draw-flow.interfaces';
import {calculateDistance} from '../../../calculate-distance.util';

/**
 * Builds an SVG path segment describing a rounded bend that smoothly joins
 * the straight legs coming **into** and **out of** the waypoint **cornerPoint**.
 *
 * @param startPoint  point before the bend
 * @param cornerPoint the actual “corner” point
 * @param endPoint    point after the bend
 * @param maxRadius   upper bound for the smoothing radius
 */

export function bend(
    startPoint: DfPoint,
    cornerPoint: DfPoint,
    endPoint: DfPoint,
    maxRadius: number,
): string {
    // Choose the largest radius that “fits” both legs and does not exceed maxRadius
    const bendRadius = Math.min(
        calculateDistance(startPoint, cornerPoint) / 2,
        calculateDistance(cornerPoint, endPoint) / 2,
        maxRadius,
    );

    // If all three points lie on the same straight line, no rounding is needed
    const isColinear =
        (startPoint.x === cornerPoint.x && cornerPoint.x === endPoint.x) ||
        (startPoint.y === cornerPoint.y && cornerPoint.y === endPoint.y);

    if (isColinear) {
        return `L${cornerPoint.x} ${cornerPoint.y}`; // simple straight-line segment
    }

    // Determine whether we are entering the corner horizontally */
    const enteringHorizontally = startPoint.y === cornerPoint.y;

    // horizontal → vertical turn
    if (enteringHorizontally) {
        const xDir = startPoint.x < endPoint.x ? -1 : 1; // step “back” along X
        const yDir = startPoint.y < endPoint.y ? 1 : -1; // and “forward” along Y

        return (
            `L ${cornerPoint.x + bendRadius * xDir},${cornerPoint.y}` + // straight segment
            `Q ${cornerPoint.x},${cornerPoint.y} ${cornerPoint.x},${cornerPoint.y + bendRadius * yDir}` // quarter-circle
        );
    }

    // vertical → horizontal turn
    const xDir = startPoint.x < endPoint.x ? 1 : -1; // “forward” along X
    const yDir = startPoint.y < endPoint.y ? -1 : 1; // step “back” along Y

    return (
        `L ${cornerPoint.x},${cornerPoint.y + bendRadius * yDir}` + // straight segment
        `Q ${cornerPoint.x},${cornerPoint.y} ${cornerPoint.x + bendRadius * xDir},${cornerPoint.y}` // quarter-circle
    );
}
