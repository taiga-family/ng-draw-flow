import {type FactoryProvider, InjectionToken} from '@angular/core';

import {
    DfArrowhead,
    DfConnectionType,
    type DfOptions,
    type DfOptionsInput,
} from './ng-draw-flow.interfaces';

export const DRAW_FLOW_DEFAULT_OPTIONS: DfOptions = {
    connection: {
        arrowhead: {type: DfArrowhead.None, width: 8, height: 4},
        type: DfConnectionType.Bezier,
        curvature: 0.25,
    },
    nodes: {},
    options: {
        nodeDragThreshold: 1,
        nodesDraggable: true,
        nodesDeletable: true,
        connectionsDeletable: true,
        connectionsCreatable: true,
    },
};

export const DRAW_FLOW_OPTIONS = new InjectionToken('[DRAW_FLOW_OPTIONS]: Options', {
    factory: () => DRAW_FLOW_DEFAULT_OPTIONS,
});

export function provideNgDrawFlowConfigs(options: DfOptionsInput = {}): FactoryProvider {
    return {
        provide: DRAW_FLOW_OPTIONS,
        useFactory: (): DfOptions => ({
            connection: {
                ...DRAW_FLOW_DEFAULT_OPTIONS.connection,
                ...options.connection,
                arrowhead: {
                    ...DRAW_FLOW_DEFAULT_OPTIONS.connection.arrowhead,
                    ...options.connection?.arrowhead,
                },
            },
            nodes: {
                ...DRAW_FLOW_DEFAULT_OPTIONS.nodes,
                ...options.nodes,
            },
            options: {
                ...DRAW_FLOW_DEFAULT_OPTIONS.options,
                ...options.options,
            },
        }),
    };
}
