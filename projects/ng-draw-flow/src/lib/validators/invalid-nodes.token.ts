import {InjectionToken, signal, type WritableSignal} from '@angular/core';

export const INVALID_NODES = new InjectionToken<WritableSignal<string[]>>(
    '[INVALID_NODES]: Invalid nodes signal',
    {factory: () => signal([])},
);
