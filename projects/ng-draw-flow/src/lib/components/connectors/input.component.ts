import {ChangeDetectionStrategy, Component, input} from '@angular/core';

import {
    DfConnectionPoint,
    DfConnectorPosition,
    type DfDataConnectorConfig,
} from '../../ng-draw-flow.interfaces';
import {BaseConnector} from './base-connector';

@Component({
    standalone: true,
    selector: 'df-input',
    template: '',
    styleUrl: './connector.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DfInputComponent extends BaseConnector {
    protected override connectorType = DfConnectionPoint.Input;

    public readonly dataInput = input.required<DfDataConnectorConfig>({
        alias: 'connectorData',
    });

    public readonly positionInput = input(DfConnectorPosition.Left, {
        alias: 'position',
    });

    public get data(): DfDataConnectorConfig {
        return this.dataInput();
    }

    public override get position(): DfConnectorPosition {
        return this.positionInput();
    }
}
