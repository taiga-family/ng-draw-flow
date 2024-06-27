import type {FactoryProvider} from '@angular/core';

import type {DfComponents} from './ng-draw-flow.interfaces';
import {DRAW_FLOW_COMPONENTS} from './ng-draw-flow.token';

export function provideNgDrawFlowConfigs(options: DfComponents): FactoryProvider {
    return {
        provide: DRAW_FLOW_COMPONENTS,
        useFactory: () => options || {},
    };
}
