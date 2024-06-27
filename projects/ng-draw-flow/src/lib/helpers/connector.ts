import type {DfConnectionPoint, DfDataConnector} from '../ng-draw-flow.interfaces';

export function isConnectorType(type: string): type is DfConnectionPoint {
    return ['input', 'output'].includes(type);
}

export function connectorName(connector: DfDataConnector): string {
    return `nodeId:${connector.nodeId},connectorType:${connector.connectorType},connectorId:${connector.connectorId}`;
}
