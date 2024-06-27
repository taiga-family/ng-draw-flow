import type {OnDestroy} from '@angular/core';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import type {DfDataConnectorConfig} from '../../ng-draw-flow.interfaces';
import {DfConnectionPoint} from '../../ng-draw-flow.interfaces';
import {BaseConnector} from './base-connector';

@Component({
    standalone: true,
    selector: 'df-input',
    template: '',
    styleUrls: ['./connector.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DfInputComponent extends BaseConnector implements OnDestroy {
    protected override connectorType = DfConnectionPoint.Input;

    @Input('connectorData')
    public data!: DfDataConnectorConfig;

    public ngOnDestroy(): void {
        this.connectionsService.removeConnectionsByConnectorId(this.data.connectorId);
    }
}
