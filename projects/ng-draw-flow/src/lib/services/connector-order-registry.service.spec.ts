import {DfConnectorOrderRegistryService} from './connector-order-registry.service';

describe('DfConnectorOrderRegistryService', () => {
    it('publishes immutable node and connector maps', () => {
        const registry = new DfConnectorOrderRegistryService();

        registry.set('node-1', 'output-1', 2);

        const first = registry.orders();

        registry.set('node-1', 'output-2', 1);

        expect(first.get('node-1')).toEqual(new Map([['output-1', 2]]));
        expect(registry.orders().get('node-1')).toEqual(
            new Map([
                ['output-1', 2],
                ['output-2', 1],
            ]),
        );
        expect(registry.orders()).not.toBe(first);
        expect(registry.orders().get('node-1')).not.toBe(first.get('node-1'));
    });

    it('registers a missing order and ignores unchanged values', () => {
        const registry = new DfConnectorOrderRegistryService();

        registry.set('node-1', 'output-1');

        const first = registry.orders();

        registry.set('node-1', 'output-1');

        expect(first.get('node-1')?.get('output-1')).toBeNull();
        expect(registry.orders()).toBe(first);
    });

    it('removes connector and empty node entries', () => {
        const registry = new DfConnectorOrderRegistryService();

        registry.set('node-1', 'output-1', 0);
        registry.remove('node-1', 'output-1');

        expect(registry.orders().has('node-1')).toBe(false);
    });
});
