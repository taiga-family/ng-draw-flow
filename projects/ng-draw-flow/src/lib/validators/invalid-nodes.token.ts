import type {WritableSignal} from '@angular/core';
import {InjectionToken, signal} from '@angular/core';

export const INVALID_NODES = new InjectionToken<WritableSignal<string[]>>(
    '[INVALID_NODES]: Invalid nodes signal',
    {factory: () => signal([])},
);
