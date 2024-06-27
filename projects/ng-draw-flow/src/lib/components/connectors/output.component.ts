import type {OnDestroy} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    inject,
    Input,
} from '@angular/core';

import type {DfDataConnectorConfig} from '../../ng-draw-flow.interfaces';
import {DfConnectionPoint} from '../../ng-draw-flow.interfaces';
import {DraftConnectionService} from '../connections/draft-connection/draft-connection.service';
import {BaseConnector} from './base-connector';

@Component({
    standalone: true,
    selector: 'df-output',
    template: '',
    styleUrls: ['./connector.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DfOutputComponent extends BaseConnector implements OnDestroy {
    protected override connectorType = DfConnectionPoint.Output;
    private readonly draftConnectionService = inject(DraftConnectionService);

    @Input('connectorData')
    public data!: DfDataConnectorConfig;

    @HostListener('pointerdown.stop')
    protected onDragStart(_event: PointerEvent): void {
        const {nodeId, connectorId} = this.data;

        if (!nodeId || !connectorId || this.isDisabled) {
            return;
        }

        this.draftConnectionService.connection$.next({
            nodeId,
            connectorId,
            connectorType: DfConnectionPoint.Output,
        });
    }

    public ngOnDestroy(): void {
        this.connectionsService.removeConnectionsByConnectorId(this.data.connectorId);
    }
}
