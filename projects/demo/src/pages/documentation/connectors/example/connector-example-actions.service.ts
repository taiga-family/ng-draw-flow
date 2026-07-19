import {Injectable, signal} from '@angular/core';
import {type DfDataConnectorConfig} from '@ng-draw-flow/core';

@Injectable()
export class ConnectorExampleActionsService {
    private readonly activationsSignal = signal(0);
    private readonly lastDataSignal = signal<Record<string, unknown> | null>(null);

    public readonly activations = this.activationsSignal.asReadonly();
    public readonly lastData = this.lastDataSignal.asReadonly();

    public activate(connector: DfDataConnectorConfig): void {
        this.activationsSignal.update((value) => value + 1);
        this.lastDataSignal.set(connector.data ?? null);
    }
}
