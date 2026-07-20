import {TestBed} from '@angular/core/testing';
import {
    DF_CONNECTOR_ORDER_REGISTRY,
    DF_NODE_SIZE_REGISTRY,
    DfConnectorOrderRegistryService,
    DfNodeSizeRegistryService,
} from '@ng-draw-flow/core';

import {provideNgDrawFlowLayouts} from './layout.configs';
import {DfNodeSizingStrategy, DfTreeLayoutDirection} from './layout.interfaces';
import {DF_TREE_LAYOUT_OPTIONS} from './tree-layout-options.token';

jest.mock('@ng-draw-flow/core', () => ({
    DF_CONNECTOR_ORDER_REGISTRY: Symbol('DF_CONNECTOR_ORDER_REGISTRY'),
    DF_NODE_SIZE_REGISTRY: Symbol('DF_NODE_SIZE_REGISTRY'),
    DfConnectorOrderRegistryService: class {},
    DfNodeSizeRegistryService: class {},
    NgDrawFlowStoreService: class {},
}));

describe('provideNgDrawFlowLayouts', () => {
    afterEach(() => {
        TestBed.resetTestingModule();
    });

    it('provides supported strict-tree options', () => {
        TestBed.configureTestingModule({
            providers: [
                provideNgDrawFlowLayouts({
                    tree: {
                        direction: DfTreeLayoutDirection.TopToBottom,
                        nodeSizing: {
                            strategy: DfNodeSizingStrategy.Fixed,
                            size: {width: 100, height: 40},
                        },
                        levelGap: 60,
                    },
                }),
            ],
        });

        expect(TestBed.inject(DF_TREE_LAYOUT_OPTIONS)).toEqual({
            direction: DfTreeLayoutDirection.TopToBottom,
            nodeSizing: {
                strategy: DfNodeSizingStrategy.Fixed,
                size: {width: 100, height: 40},
            },
            levelGap: 60,
        });
    });

    it('enables the core size registry only for measured sizing', () => {
        TestBed.configureTestingModule({
            providers: [
                provideNgDrawFlowLayouts({
                    tree: {
                        nodeSizing: {
                            strategy: DfNodeSizingStrategy.Measured,
                            fallback: {width: 180, height: 64},
                        },
                    },
                }),
            ],
        });

        expect(TestBed.inject(DF_NODE_SIZE_REGISTRY)).toBeInstanceOf(
            DfNodeSizeRegistryService,
        );
    });

    it('enables the connector order registry for every layout', () => {
        TestBed.configureTestingModule({
            providers: [provideNgDrawFlowLayouts()],
        });

        expect(TestBed.inject(DF_CONNECTOR_ORDER_REGISTRY)).toBeInstanceOf(
            DfConnectorOrderRegistryService,
        );
    });
});
