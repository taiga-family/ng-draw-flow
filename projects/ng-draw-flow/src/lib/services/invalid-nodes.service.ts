import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class InvalidNodesService {
    private readonly invalidIdsStore$ = new BehaviorSubject<Set<string>>(new Set());
    public readonly invalidIds$ = this.invalidIdsStore$.asObservable();

    public setInvalidId(ids: string[]): void {
        this.invalidIdsStore$.next(new Set(ids));
    }
}
