import type {DfConnectorData} from '../../../../ng-draw-flow.interfaces';
import {DfConnectorPosition} from '../../../../ng-draw-flow.interfaces';
import {
    createBottomBottomCurve,
    createBottomLeftCurve,
    createBottomRightCurve,
    createBottomTopCurve,
    createLeftBottomCurve,
    createLeftLeftCurve,
    createLeftRightCurve,
    createLeftTopCurve,
    createRightBottomCurve,
    createRightLeftCurve,
    createRightRightCurve,
    createRightTopCurve,
    createTopBottomCurve,
    createTopLeftCurve,
    createTopRightCurve,
    createTopTopCurve,
} from './curvatures';

export function createSmoothstepPath(
    startConnector: DfConnectorData,
    endConnector: DfConnectorData,
    radius: number,
): string {
    const {x: startX, y: startY} = startConnector.point;
    const {x: endX, y: endY} = endConnector.point;
    const startConnectorPosition = startConnector.position;
    const endConnectorPosition = endConnector.position;

    if (startConnectorPosition === DfConnectorPosition.Right) {
        switch (endConnectorPosition) {
            case DfConnectorPosition.Bottom:
                return createRightBottomCurve({startX, startY, endX, endY, radius});
            case DfConnectorPosition.Right:
                return createRightRightCurve({startX, startY, endX, endY, radius});
            case DfConnectorPosition.Top:
                return createRightTopCurve({startX, startY, endX, endY, radius});
            case DfConnectorPosition.Left:
            default:
                return createRightLeftCurve({startX, startY, endX, endY, radius});
        }
    }

    if (startConnectorPosition === DfConnectorPosition.Left) {
        switch (endConnectorPosition) {
            case DfConnectorPosition.Bottom:
                return createLeftBottomCurve({startX, startY, endX, endY, radius});
            case DfConnectorPosition.Left:
                return createLeftLeftCurve({startX, startY, endX, endY, radius});
            case DfConnectorPosition.Top:
                return createLeftTopCurve({startX, startY, endX, endY, radius});
            case DfConnectorPosition.Right:
            default:
                return createLeftRightCurve({startX, startY, endX, endY, radius});
        }
    }

    if (startConnectorPosition === DfConnectorPosition.Bottom) {
        switch (endConnectorPosition) {
            case DfConnectorPosition.Bottom:
                return createBottomBottomCurve({startX, startY, endX, endY, radius});
            case DfConnectorPosition.Left:
                return createBottomLeftCurve({startX, startY, endX, endY, radius});
            case DfConnectorPosition.Right:
                return createBottomRightCurve({startX, startY, endX, endY, radius});
            case DfConnectorPosition.Top:
            default:
                return createBottomTopCurve({startX, startY, endX, endY, radius});
        }
    }

    if (startConnectorPosition === DfConnectorPosition.Top) {
        switch (endConnectorPosition) {
            case DfConnectorPosition.Left:
                return createTopLeftCurve({startX, startY, endX, endY, radius});
            case DfConnectorPosition.Right:
                return createTopRightCurve({startX, startY, endX, endY, radius});
            case DfConnectorPosition.Top:
                return createTopTopCurve({startX, startY, endX, endY, radius});
            case DfConnectorPosition.Bottom:
            default:
                return createTopBottomCurve({startX, startY, endX, endY, radius});
        }
    }

    return '';
}
