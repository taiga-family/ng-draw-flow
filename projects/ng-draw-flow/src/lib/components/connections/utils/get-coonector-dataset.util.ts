import {isConnectorType} from '../../../helpers';
import {type DfDataConnector} from '../../../ng-draw-flow.interfaces';

export function getConnectorDataset(element: HTMLElement): DfDataConnector | null {
    const {nodeId, connectorId, connectorType, position} = element.dataset;
    const isValidConnector =
        nodeId && connectorId && connectorType && isConnectorType(connectorType);

    return isValidConnector
        ? {
              nodeId,
              connectorId,
              connectorType,
              position,
          }
        : null;
}
