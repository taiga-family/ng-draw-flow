import {Injectable} from '@angular/core';
import {BehaviorSubject, ReplaySubject} from 'rxjs';

import type {
    DfConnectorData,
    DfConnectorPosition,
    DfPoint,
} from '../ng-draw-flow.interfaces';

@Injectable()
export class CoordinatesService {
    private connectionPointsMap: Record<string, BehaviorSubject<DfConnectorData>> = {};

    public connectionPointsMapChange$: ReplaySubject<void> = new ReplaySubject<void>(1);

    public getConnectionPoint(
        name: string,
    ): BehaviorSubject<DfConnectorData> | undefined {
        return this.connectionPointsMap[name];
    }

    public addConnectionPoint(
        name: string,
        point: DfPoint,
        position: DfConnectorPosition,
    ): void {
        if (this.connectionPointsMap[name]) {
            this.connectionPointsMap[name].next({point, position});
        } else {
            this.connectionPointsMap[name] = new BehaviorSubject<DfConnectorData>({
                point,
                position,
            });
        }

        this.connectionPointsMapChange$.next();
    }
}
