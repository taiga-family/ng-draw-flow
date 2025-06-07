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

        expect(hash).toBe('nodeId:a,connectorType:input,connectorId:1');
    });
});
