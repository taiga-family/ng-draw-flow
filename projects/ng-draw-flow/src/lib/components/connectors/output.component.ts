import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';

import {DRAW_FLOW_OPTIONS} from '../../ng-draw-flow.configs';
import {
    type DfConnectionLabel,
    DfConnectionPoint,
    DfConnectorPosition,
    type DfDataConnectorConfig,
    type DfOptions,
} from '../../ng-draw-flow.interfaces';
import {DraftConnectionService} from '../connections/draft-connection/draft-connection.service';
import {BaseConnector} from './base-connector';

@Component({
    standalone: true,
    selector: 'df-output',
    template: '',
    styleUrls: ['./connector.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(pointerdown)': 'this.onDragStart($event)',
    },
})
export class DfOutputComponent extends BaseConnector {
    private readonly draftConnectionService = inject(DraftConnectionService);
    private readonly options = inject<DfOptions>(DRAW_FLOW_OPTIONS);
    protected override connectorType = DfConnectionPoint.Output;

    @Input('connectorData')
    public data!: DfDataConnectorConfig;

    @Input()
    public override position = DfConnectorPosition.Right;

    @Input()
    public connectionLabel?: DfConnectionLabel;

    protected onDragStart(event: PointerEvent): void {
        event.stopPropagation();

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
            connectionLabel: this.connectionLabel,
        });
    }
}
