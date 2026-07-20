import {Injectable} from '@angular/core';
import {type DfDataConnectorConfig} from '@ng-draw-flow/core';

@Injectable()
export class DynamicConnectorExampleActionsService {
    private addChildHandler: ((connector: DfDataConnectorConfig) => void) | null = null;

    public configure(handler: (connector: DfDataConnectorConfig) => void): void {
        this.addChildHandler = handler;
    }

    public addChild(connector: DfDataConnectorConfig): void {
        this.addChildHandler?.(connector);
    }
}
