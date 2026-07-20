import {computed, Directive, effect, ElementRef, inject, input} from '@angular/core';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {DRAW_FLOW_OPTIONS} from '../../ng-draw-flow.configs';
import {
    type DfConnectionPoint,
    type DfConnectorContentContext,
    type DfConnectorPosition,
    type DfDataConnectorConfig,
    type DfPoint,
} from '../../ng-draw-flow.interfaces';
import {ConnectionsService} from '../connections/connections.service';

@Directive({
    host: {
        '[attr.data-connector-type]': 'connectorType',
        '[attr.data-node-id]': 'bindNodeId',
        '[attr.data-connector-id]': 'bindConnectorId',
        '[attr.data-position]': 'bindPosition',
        '[class.df-has-content]': 'hasContent',
        '[class.df-not-creatable]': '!connectorVisible',
    },
})
export abstract class BaseConnector {
    protected connectorType!: DfConnectionPoint;

    protected isDisabled = false;
    protected readonly connectionsService = inject(ConnectionsService);

    public readonly connectionsCreatable =
        inject(DRAW_FLOW_OPTIONS).options.connectionsCreatable;

    public readonly content = input<
        PolymorpheusContent<DfConnectorContentContext> | undefined
    >();

    public readonly contentContext = computed<DfConnectorContentContext>(() => ({
        $implicit: this.data,
    }));

    public coordinates?: DfPoint;
    public readonly nativeElement = inject(ElementRef).nativeElement;

    constructor() {
        effect(() => {
            const connectorId = this.data?.connectorId;

            if (!connectorId) {
                return;
            }

            this.setupDisabledState(
                this.connectionsService.usedConnectors().includes(connectorId),
            );
        });
    }

    public abstract get position(): DfConnectorPosition | undefined;

    protected abstract get data(): DfDataConnectorConfig;

    public get connectorVisible(): boolean {
        return this.connectionsCreatable;
    }

    public get disabled(): boolean {
        return this.isDisabled;
    }

    public get hasContent(): boolean {
        return this.content() !== undefined && this.content() !== null;
    }

    public get bindNodeId(): string | undefined {
        return this.data?.nodeId;
    }

    public get bindConnectorId(): string | undefined {
        return this.data?.connectorId;
    }

    public get bindPosition(): DfConnectorPosition | undefined {
        return this.position;
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
