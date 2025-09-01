import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';

import {DRAW_FLOW_OPTIONS} from '../../ng-draw-flow.configs';
import type {DfDataConnectorConfig, DfOptions} from '../../ng-draw-flow.interfaces';
import {DfConnectionPoint, DfConnectorPosition} from '../../ng-draw-flow.interfaces';
import {DraftConnectionService} from '../connections/draft-connection/draft-connection.service';
import {BaseConnector} from './base-connector';

@Component({
    standalone: true,
    selector: 'df-output',
    template: '',
    styleUrls: ['./connector.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(pointerdown.stop)': 'this.onDragStart($event)',
    },
})
export class DfOutputComponent extends BaseConnector {
    protected override connectorType = DfConnectionPoint.Output;
    private readonly draftConnectionService = inject(DraftConnectionService);
    private readonly options = inject<DfOptions>(DRAW_FLOW_OPTIONS);

    @Input('connectorData')
    public data!: DfDataConnectorConfig;

    @Input()
    public override position = DfConnectorPosition.Right;

    protected onDragStart(_event: PointerEvent): void {
        const {nodeId, connectorId} = this.data;

        if (
            !nodeId ||
            !connectorId ||
            this.isDisabled ||
            !this.options.options.connectionsCreatable
        ) {
            return;
        }

        this.draftConnectionService.connection$.next({
            nodeId,
            connectorId,
            connectorType: DfConnectionPoint.Output,
            position: this.position,
        });
    }
}
