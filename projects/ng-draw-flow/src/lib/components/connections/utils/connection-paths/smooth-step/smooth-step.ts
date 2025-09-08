import type {DfConnectorData, DfPoint} from '../../../../../ng-draw-flow.interfaces';
import {DfConnectorPosition} from '../../../../../ng-draw-flow.interfaces';
import {bend} from './path-parts/bend';
import {computeWaypoints} from './path-parts/waypoints';

/**
 * Draws a smooth-step SVG path between two connectors.
 *
 * @param startConnector   Data for the start connector.
 * @param endConnector     Data for the end connector.
 * @param radius           Radius of each bend (in pixels).
 * @returns                A tuple with an SVG `d` attribute and label coordinates.
 */
export function createSmoothStepPath(
    startConnector: DfConnectorData,
    endConnector: DfConnectorData,
    radius = 5,
): [path: string, labelX: number, labelY: number] {
    // Default to Bottom/Top when the position is null (e.g. while a draft edge is dragged).
    const sourcePos = startConnector.position ?? DfConnectorPosition.Bottom;
    const targetPos = endConnector.position ?? DfConnectorPosition.Top;

    const [polyline, labelX, labelY] = computeWaypoints({
        source: startConnector.point,
        sourcePos,
        target: endConnector.point,
        targetPos,
    });

    /** Convert the polyline to an SVG path (M, L, Q commands). */
    const path = polyline.reduce<string>(
        // eslint-disable-next-line @typescript-eslint/max-params
        (computedPath: string, point: DfPoint, pathStepIndex: number, arr: DfPoint[]) => {
            /* a) First point — use `M` (move-to). */
            if (pathStepIndex === 0) {
                return `M${point.x} ${point.y}`;
            }

            /* b) Last point — straight segment `L`. */
            if (pathStepIndex === arr.length - 1) {
                return `${computedPath}L${point.x} ${point.y}`;
            }

            /* c) Intermediate waypoint — insert a rounded bend (`L` + `Q`). */
            return `${computedPath}${bend(arr[pathStepIndex - 1]!, point, arr[pathStepIndex + 1]!, radius)}`;
        },
        '',
    );

    return [path, labelX, labelY]; // ready-made `d` attribute for <path>
}
