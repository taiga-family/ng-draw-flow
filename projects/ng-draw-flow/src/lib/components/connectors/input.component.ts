import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

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
    styleUrls: ['./connector.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DfInputComponent extends BaseConnector {
    protected override connectorType = DfConnectionPoint.Input;

    @Input('connectorData')
    public data!: DfDataConnectorConfig;

    @Input()
    public override position = DfConnectorPosition.Left;
}
