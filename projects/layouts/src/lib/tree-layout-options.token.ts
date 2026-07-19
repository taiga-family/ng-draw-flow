import {InjectionToken} from '@angular/core';

import {type DfTreeLayoutOptions} from './layout.interfaces';

export const DF_TREE_LAYOUT_OPTIONS = new InjectionToken<DfTreeLayoutOptions>(
    '[DF_TREE_LAYOUT_OPTIONS]: Tree layout options',
    {factory: () => ({})},
);
