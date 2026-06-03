import {Injectable, signal, type WritableSignal} from '@angular/core';

import {
    type DfConnectorData,
    type DfConnectorPosition,
    type DfPoint,
} from '../ng-draw-flow.interfaces';

@Injectable()
export class CoordinatesService {
    private readonly connectionPointsMap: Record<
        string,
        WritableSignal<DfConnectorData | null>
    > = {};

    public getConnectionPointSignal(
        connectorHash: string,
    ): WritableSignal<DfConnectorData | null> {
        return this.ensureConnectionPointSignal(connectorHash);
    }

    public addConnectionPoint(
        connectorHash: string,
        point: DfPoint,
        position: DfConnectorPosition,
    ): void {
        this.ensureConnectionPointSignal(connectorHash).set({point, position});
    }

    private ensureConnectionPointSignal(
        connectorHash: string,
    ): WritableSignal<DfConnectorData | null> {
        const pointSignal = this.connectionPointsMap[connectorHash];

        if (pointSignal) {
            return pointSignal;
        }

        const nextSignal = signal<DfConnectorData | null>(null);

        this.connectionPointsMap[connectorHash] = nextSignal;

        return nextSignal;
    }
}
