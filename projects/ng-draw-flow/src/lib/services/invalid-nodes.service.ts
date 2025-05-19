import {Injectable, signal} from '@angular/core';

@Injectable()
export class InvalidNodesService {
    public readonly $invalidIds = signal<Set<string>>(new Set());

    public setInvalidId(ids: string[]): void {
        this.$invalidIds.set(new Set(ids));
    }
}
