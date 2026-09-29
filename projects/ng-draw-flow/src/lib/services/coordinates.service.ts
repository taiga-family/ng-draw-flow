import {Injectable, signal, type WritableSignal} from '@angular/core';

import {
    type DfConnectorData,
    type DfConnectorPosition,
    type DfPoint,
} from '../ng-draw-flow.interfaces';

@Injectable()
export class CoordinatesService {
    private readonly connectionPointsMap = new Map<
        string,
        WritableSignal<DfConnectorData | null>
    >();

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

    public removeConnectionPoint(connectorHash: string): void {
        const point = this.connectionPointsMap.get(connectorHash);

        // A retained edge may still depend on an unresolved placeholder. Keep its
        // identity until a real position can invalidate that dependency.
        if (!point?.()) {
            return;
        }

        point.set(null);
        this.connectionPointsMap.delete(connectorHash);
    }

    private ensureConnectionPointSignal(
        connectorHash: string,
    ): WritableSignal<DfConnectorData | null> {
        const pointSignal = this.connectionPointsMap.get(connectorHash);

        if (pointSignal) {
            return pointSignal;
        }

        const nextSignal = signal<DfConnectorData | null>(null);

        this.connectionPointsMap.set(connectorHash, nextSignal);

        return nextSignal;
    }
}
