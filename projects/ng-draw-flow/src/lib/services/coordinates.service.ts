import {Injectable} from '@angular/core';
import {BehaviorSubject, ReplaySubject} from 'rxjs';

import type {DfPoint} from '../ng-draw-flow.interfaces';

@Injectable()
export class CoordinatesService {
    private connectionPointsMap: Record<string, BehaviorSubject<DfPoint>> = {};
    public connectionPointsMapChange$: ReplaySubject<void> = new ReplaySubject<void>(1);

    public getConnectionPoint(name: string): BehaviorSubject<DfPoint> | undefined {
        return this.connectionPointsMap[name];
    }

    public addConnectionPoint(name: string, pointCoordinates: DfPoint): void {
        if (this.connectionPointsMap[name]) {
            this.connectionPointsMap[name].next(pointCoordinates);
        } else {
            this.connectionPointsMap[name] = new BehaviorSubject<DfPoint>(
                pointCoordinates,
            );
        }

        this.connectionPointsMapChange$.next();
    }
}
