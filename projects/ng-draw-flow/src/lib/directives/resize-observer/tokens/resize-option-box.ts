import {InjectionToken} from '@angular/core';

export const DF_RESIZE_OPTION_BOX_DEFAULT = 'content-box';

export const DF_RESIZE_OPTION_BOX = new InjectionToken<ResizeObserverBoxOptions>(
    '[DF_RESIZE_OPTION_BOX]',
    {
        providedIn: 'root',
        factory: () => DF_RESIZE_OPTION_BOX_DEFAULT,
    },
);
