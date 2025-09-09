import {type MonoTypeOperatorFunction, tap} from 'rxjs';

export function dfPreventDefault<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap((event) => event.preventDefault());
}

export function dfStopPropagation<T extends Event>(): MonoTypeOperatorFunction<T> {
    return tap((event) => event.stopPropagation());
}
