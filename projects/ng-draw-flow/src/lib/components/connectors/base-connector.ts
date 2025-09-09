import {DestroyRef, Directive, ElementRef, HostBinding, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {filter} from 'rxjs';

import {
    type DfConnectionPoint,
    type DfConnectorPosition,
    type DfDataConnectorConfig,
    type DfPoint,
} from '../../ng-draw-flow.interfaces';
import {ConnectionsService} from '../connections/connections.service';

@Directive()
export abstract class BaseConnector {
    protected abstract data: DfDataConnectorConfig;

    @HostBinding('attr.data-connector-type')
    protected connectorType!: DfConnectionPoint;

    protected readonly destroyRef = inject(DestroyRef);
    protected isDisabled = false;
    protected readonly connectionsService = inject(ConnectionsService);

    protected readonly sub = this.connectionsService.usedConnectors$
        .pipe(
            filter(() => !!this.data?.connectorId),
            takeUntilDestroyed(),
        )
        .subscribe((usedConnectorIds: string[]) => {
            this.setupDisabledState(usedConnectorIds.includes(this.data.connectorId));
        });

    public coordinates?: DfPoint;
    public position?: DfConnectorPosition;
    public readonly nativeElement = inject(ElementRef).nativeElement;

    @HostBinding('attr.data-node-id')
    public get bindNodeId(): string {
        return this.data?.nodeId;
    }

    @HostBinding('attr.data-connector-id')
    public get bindConnectorId(): string {
        return this.data?.connectorId;
    }

    @HostBinding('attr.data-position')
    public get bindPosition(): DfConnectorPosition | undefined {
        return this.position;
    }

    public destroy(): void {
        this.connectionsService.removeConnectionsByConnectorId(this.data.connectorId);
    }

    protected setupDisabledState(connected: boolean): void {
        if (connected) {
            this.nativeElement.setAttribute('data-connected', 'true');
        } else {
            this.nativeElement.removeAttribute('data-connected');
        }

        this.isDisabled = this.data.single && connected;

        this.nativeElement.classList.toggle('df-disabled', this.isDisabled);
    }
}
