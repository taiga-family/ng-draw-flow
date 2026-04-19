import {
    DestroyRef,
    Directive,
    effect,
    ElementRef,
    HostBinding,
    inject,
    Injector,
    type OnInit,
    runInInjectionContext,
} from '@angular/core';

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
    protected readonly injector = inject(Injector);
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
        runInInjectionContext(this.injector, () => {
            effect(() => {
                const connectorId = this.data?.connectorId;

                if (!connectorId) {
                    return;
                }

                this.setupDisabledState(
                    this.connectionsService.usedConnectors().includes(connectorId),
                );
            });
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
