import {InjectionToken} from '@angular/core';

import type {DfComponents} from './ng-draw-flow.interfaces';

export const DRAW_FLOW_COMPONENTS = new InjectionToken<DfComponents>(
    'DRAW_FLOW_COMPONENTS',
);

export const DRAW_FLOW_ROOT_ELEMENT = new InjectionToken<HTMLElement>(
    'DRAW_FLOW_ROOT_ELEMENT',
);
