import type {MonoTypeOperatorFunction} from 'rxjs';
import {tap} from 'rxjs';

export function dfPreventDefault<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap(event => event.preventDefault());
}
