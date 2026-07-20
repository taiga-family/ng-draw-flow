import {TestBed} from '@angular/core/testing';

import {DfNodeSizeRegistryService} from './node-size-registry.service';

describe('DfNodeSizeRegistryService', () => {
    let service: DfNodeSizeRegistryService;

    beforeEach(() => {
        TestBed.configureTestingModule({providers: [DfNodeSizeRegistryService]});
        service = TestBed.inject(DfNodeSizeRegistryService);
    });

    it('publishes immutable size snapshots', () => {
        const initial = service.sizes();

        service.set('node-1', {width: 180, height: 64});

        expect(service.sizes()).not.toBe(initial);
        expect(service.sizes().get('node-1')).toEqual({width: 180, height: 64});
    });

    it('does not publish an unchanged or invalid size', () => {
        service.set('node-1', {width: 180, height: 64});
        const measured = service.sizes();

        service.set('node-1', {width: 180, height: 64});
        service.set('node-2', {width: 0, height: 64});

        expect(service.sizes()).toBe(measured);
        expect(service.sizes().has('node-2')).toBe(false);
    });

    it('removes a node size', () => {
        service.set('node-1', {width: 180, height: 64});
        service.remove('node-1');

        expect(service.sizes().has('node-1')).toBe(false);
    });
});
