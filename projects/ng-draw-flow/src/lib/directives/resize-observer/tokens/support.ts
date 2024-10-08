import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';

export const DF_WINDOW = new InjectionToken<Window>('[DF_WINDOW]', {
    factory: () => {
        const {defaultView} = inject(DOCUMENT);

        if (!defaultView) {
            throw new Error('Window is not available');
        }

        return defaultView;
    },
});

export const DF_RESIZE_OBSERVER_SUPPORT = new InjectionToken<boolean>(
    '[DF_RESIZE_OBSERVER_SUPPORT]',
    {
        providedIn: 'root',
        factory: () => !!(inject(DF_WINDOW) as any).ResizeObserver,
    },
);
