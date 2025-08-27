import type {DfPoint} from '../../../../../../ng-draw-flow.interfaces';
import {DfConnectorPosition} from '../../../../../../ng-draw-flow.interfaces';

/**
 * Returns a unit vector (±1 on one axis, 0 on the other)
 * representing the first axial step of the edge immediately
 * after it leaves the source connector.
 *
 * ─ If the connector is **Left** or **Right**, movement is along **X**.
 * ─ Otherwise (Top / Bottom), movement is along **Y**.
 *
 * @param source      coordinates of the source connector
 * @param sourcePos   side of the source node (Left | Right | Top | Bottom)
 * @param target      coordinates of the target connector (used for direction)
 */
export function getPrimaryDirection(
    source: DfPoint,
    sourcePos: DfConnectorPosition,
    target: DfPoint,
): DfPoint {
    // Horizontal connectors → move along X
    if (
        sourcePos === DfConnectorPosition.Left ||
        sourcePos === DfConnectorPosition.Right
    ) {
        return source.x < target.x ? {x: 1, y: 0} : {x: -1, y: 0};
    }

    // Vertical connectors → move along Y
    return source.y < target.y ? {x: 0, y: 1} : {x: 0, y: -1};
}
