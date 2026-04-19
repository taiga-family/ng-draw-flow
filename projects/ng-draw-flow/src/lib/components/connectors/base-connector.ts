import {
    DestroyRef,
    Directive,
    ElementRef,
    HostBinding,
    inject,
    type OnInit,
} from '@angular/core';
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
export abstract class BaseConnector implements OnInit {
    @HostBinding('attr.data-connector-type')
    protected connectorType!: DfConnectionPoint;

    protected readonly destroyRef = inject(DestroyRef);
    protected isDisabled = false;
    protected readonly connectionsService = inject(ConnectionsService);

    public coordinates?: DfPoint;
    public readonly nativeElement = inject(ElementRef).nativeElement;

    public abstract get position(): DfConnectorPosition | undefined;

    protected abstract get data(): DfDataConnectorConfig;

    @HostBinding('attr.data-node-id')
    public get bindNodeId(): string | undefined {
        return this.data?.nodeId;
    }

    @HostBinding('attr.data-connector-id')
    public get bindConnectorId(): string | undefined {
        return this.data?.connectorId;
    }

    @HostBinding('attr.data-position')
    public get bindPosition(): DfConnectorPosition | undefined {
        return this.position;
    }

    public ngOnInit(): void {
        this.connectionsService.usedConnectors$
            .pipe(
                filter(() => !!this.data?.connectorId),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe((usedConnectorIds: string[]) => {
                if (!this.data?.connectorId) {
                    return;
                }

                this.setupDisabledState(usedConnectorIds.includes(this.data.connectorId));
            });
    }

    public destroy(): void {
        if (!this.data?.connectorId) {
            return;
        }

        this.connectionsService.removeConnectionsByConnectorId(this.data.connectorId);
    }

    protected setupDisabledState(connected: boolean): void {
        if (connected) {
            this.nativeElement.setAttribute('data-connected', 'true');
        } else {
            this.nativeElement.removeAttribute('data-connected');
        }

        this.isDisabled = (this.data?.single satisfies boolean) && connected;

        this.nativeElement.classList.toggle('df-disabled', this.isDisabled);
    }
}
