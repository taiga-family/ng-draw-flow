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
        connectorHash: string,
    ): BehaviorSubject<DfConnectorData> | BehaviorSubject<null> {
        return this.connectionPointsMap[connectorHash] || new BehaviorSubject(null);
    }

    public addConnectionPoint(
        connectorHash: string,
        point: DfPoint,
        position: DfConnectorPosition,
    ): void {
        if (this.connectionPointsMap[connectorHash]) {
            this.connectionPointsMap[connectorHash].next({point, position});
        } else {
            this.connectionPointsMap[connectorHash] =
                new BehaviorSubject<DfConnectorData>({
                    point,
                    position,
                });
        }

        this.connectionPointsMapChange$.next();
    }
}
