import {
    type DfConnectorData,
    DfConnectorPosition,
    type DfPoint,
} from '../../../../../../ng-draw-flow.interfaces';
import {point} from '../../../point';
import {calculateControlOffset} from './control-offset';

export function getControlWithCurvature(
    sourceConnector: DfConnectorData,
    target: DfPoint,
    curvature: number,
): DfPoint {
    switch (sourceConnector.position!) {
        case DfConnectorPosition.Bottom:
            return point(
                sourceConnector.point.x,
                sourceConnector.point.y +
                    calculateControlOffset(target.y - sourceConnector.point.y, curvature),
            );
        case DfConnectorPosition.Left:
            return point(
                sourceConnector.point.x -
                    calculateControlOffset(sourceConnector.point.x - target.x, curvature),
                sourceConnector.point.y,
            );
        case DfConnectorPosition.Right:
            return point(
                sourceConnector.point.x +
                    calculateControlOffset(target.x - sourceConnector.point.x, curvature),
                sourceConnector.point.y,
            );
        case DfConnectorPosition.Top:
            return point(
                sourceConnector.point.x,
                sourceConnector.point.y -
                    calculateControlOffset(sourceConnector.point.y - target.y, curvature),
            );
    }
}
