import {Injectable} from '@angular/core';
import {type DfDataConnectorConfig} from '@ng-draw-flow/core';

export interface DynamicLayoutActionHandlers {
    readonly addChild: (connector: DfDataConnectorConfig) => void;
}

@Injectable()
export class DynamicLayoutActionsService {
    private handlers: DynamicLayoutActionHandlers | null = null;

    public configure(handlers: DynamicLayoutActionHandlers): void {
        this.handlers = handlers;
    }

    public addChild(connector: DfDataConnectorConfig): void {
        this.handlers?.addChild(connector);
    }
}
