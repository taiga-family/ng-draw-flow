import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';

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
    styleUrl: './connector.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'(pointerdown)': 'this.onDragStart($event)'},
})
export class DfOutputComponent extends BaseConnector {
    private readonly draftConnectionService = inject(DraftConnectionService);
    private readonly options = inject<DfOptions>(DRAW_FLOW_OPTIONS);
    private connectionLabelOverride?: DfConnectionLabel;

    protected override connectorType = DfConnectionPoint.Output;

    public readonly dataInput = input.required<DfDataConnectorConfig>({
        alias: 'connectorData',
    });

    public readonly positionInput = input(DfConnectorPosition.Right, {
        alias: 'position',
    });

    public readonly connectionLabelInput = input<DfConnectionLabel | undefined>(
        undefined,
        {alias: 'connectionLabel'},
    );

    public get data(): DfDataConnectorConfig {
        return this.dataInput();
    }

    public override get position(): DfConnectorPosition {
        return this.positionInput();
    }

    public get connectionLabel(): DfConnectionLabel | undefined {
        return this.connectionLabelOverride ?? this.connectionLabelInput();
    }

    public setConnectionLabel(value: DfConnectionLabel | undefined): void {
        this.connectionLabelOverride = value;
    }

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
