import {type DfConnectorData} from '../../../../../ng-draw-flow.interfaces';
import {getBezierEdgeCenter, getControlWithCurvature} from './helpers';

export function createBezierPath(
    startConnector: DfConnectorData,
    endConnector: DfConnectorData,
    curvature = 0.25,
): [path: string, labelX: number, labelY: number, offsetX: number, offsetY: number] {
    const sourceControlPoint = getControlWithCurvature(
        startConnector,
        endConnector.point,
        curvature,
    );
    const targetControlPoint = getControlWithCurvature(
        endConnector,
        startConnector.point,
        curvature,
    );
    const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
        source: startConnector.point,
        target: endConnector.point,
        sourceControlPoint,
        targetControlPoint,
    });

    return [
        `M${startConnector.point.x},${startConnector.point.y} C${sourceControlPoint.x},${sourceControlPoint.y} ${targetControlPoint.x},${targetControlPoint.y} ${endConnector.point.x},${endConnector.point.y}`,
        labelX,
        labelY,
        offsetX,
        offsetY,
    ];
}
