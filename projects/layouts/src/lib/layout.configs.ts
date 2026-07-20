import {type Provider} from '@angular/core';
import {
    DF_CONNECTOR_ORDER_REGISTRY,
    DF_NODE_SIZE_REGISTRY,
    DfConnectorOrderRegistryService,
    DfNodeSizeRegistryService,
} from '@ng-draw-flow/core';

import {DfAutoLayoutService} from './auto-layout.service';
import {DfNodeSizingStrategy, type DfTreeLayoutOptions} from './layout.interfaces';
import {DF_TREE_LAYOUT_OPTIONS} from './tree-layout-options.token';

export interface DfLayoutsOptions {
    readonly tree?: DfTreeLayoutOptions;
}

export function provideNgDrawFlowLayouts(options: DfLayoutsOptions = {}): Provider[] {
    const providers: Provider[] = [
        DfAutoLayoutService,
        DfConnectorOrderRegistryService,
        {
            provide: DF_CONNECTOR_ORDER_REGISTRY,
            useExisting: DfConnectorOrderRegistryService,
        },
        {
            provide: DF_TREE_LAYOUT_OPTIONS,
            useValue: options.tree ?? {},
        },
    ];

    if (options.tree?.nodeSizing?.strategy === DfNodeSizingStrategy.Measured) {
        providers.push(DfNodeSizeRegistryService, {
            provide: DF_NODE_SIZE_REGISTRY,
            useExisting: DfNodeSizeRegistryService,
        });
    }

    return providers;
}
