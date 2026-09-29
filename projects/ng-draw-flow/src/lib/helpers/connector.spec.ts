import {DfConnectionPoint} from '../ng-draw-flow.interfaces';
import {createConnectorHash, isConnectorType} from './connector';

describe('connector helpers', () => {
    it('identifies valid connector types', () => {
        expect(isConnectorType('input')).toBe(true);
        expect(isConnectorType('output')).toBe(true);
        expect(isConnectorType('foo')).toBe(false);
    });

    it('creates unique hash', () => {
        const hash = createConnectorHash({
            nodeId: 'a',
            connectorType: DfConnectionPoint.Input,
            connectorId: '1',
        });

        expect(hash).toBe('["a","input","1"]');
    });

    it('distinguishes identifiers containing key delimiters', () => {
        const first = createConnectorHash({
            nodeId: 'a',
            connectorType: DfConnectionPoint.Input,
            connectorId: 'b,connectorType:input,connectorId:c',
        });
        const second = createConnectorHash({
            nodeId: 'a,connectorType:input,connectorId:b',
            connectorType: DfConnectionPoint.Input,
            connectorId: 'c',
        });

        expect(first).not.toBe(second);
    });

    it('distinguishes encoded-looking identifiers from literal delimiters', () => {
        const connector = {nodeId: 'node', connectorType: DfConnectionPoint.Output};

        expect(createConnectorHash({...connector, connectorId: ','})).not.toBe(
            createConnectorHash({...connector, connectorId: '%2C'}),
        );
    });
});
