import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    input,
    output,
} from '@angular/core';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {
    type DfConnectionLabel,
    DfConnectionPoint,
    DfConnectorPosition,
    type DfDataConnectorConfig,
    DfOutputMode,
} from '../../ng-draw-flow.interfaces';
import {DF_CONNECTOR_ORDER_REGISTRY} from '../../services/connector-order-registry.service';
import {DraftConnectionService} from '../connections/draft-connection/draft-connection.service';
import {BaseConnector} from './base-connector';

@Component({
    standalone: true,
    selector: 'df-output',
    imports: [PolymorpheusOutlet],
    template: `
        @if (hasContent) {
            <span class="df-connector-content">
                <ng-container
                    *polymorpheusOutlet="content() as value; context: contentContext()"
                >
                    {{ value }}
                </ng-container>
            </span>
        }
    `,
    styleUrl: './connector.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-layout-order]': 'layoutOrder() ?? null',
        '[class.df-action]': 'isAction',
        '(click)': 'this.onActivate($event)',
        '(pointerdown)': 'this.onDragStart($event)',
    },
})
export class DfOutputComponent extends BaseConnector {
    private readonly draftConnectionService = inject(DraftConnectionService);
    private readonly connectorOrderRegistry = inject(DF_CONNECTOR_ORDER_REGISTRY);
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

    public readonly mode = input(DfOutputMode.Connection);
    public readonly layoutOrder = input<number | undefined>();
    public readonly activated = output<DfDataConnectorConfig>();

    constructor() {
        super();

        const registry = this.connectorOrderRegistry;

        if (!registry) {
            return;
        }

        effect((onCleanup) => {
            const {nodeId, connectorId} = this.dataInput();

            registry.set(nodeId, connectorId, this.layoutOrder());
            onCleanup(() => registry.remove(nodeId, connectorId));
        });
    }

    public get data(): DfDataConnectorConfig {
        return this.dataInput();
    }

    public override get position(): DfConnectorPosition {
        return this.positionInput();
    }

    public get connectionLabel(): DfConnectionLabel | undefined {
        return this.connectionLabelOverride ?? this.connectionLabelInput();
    }

    public get isAction(): boolean {
        return this.mode() === DfOutputMode.Action;
    }

    public override get connectorVisible(): boolean {
        return this.isAction || super.connectorVisible;
    }

    public setConnectionLabel(value: DfConnectionLabel | undefined): void {
        this.connectionLabelOverride = value;
    }

    protected onDragStart(event: PointerEvent): void {
        event.stopPropagation();

        if (this.isAction) {
            return;
        }

        const {nodeId, connectorId} = this.data;

        if (!nodeId || !connectorId || this.isDisabled || !this.connectionsCreatable) {
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

    protected onActivate(event: Event): void {
        if (!this.isAction) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (!this.isDisabled) {
            this.activated.emit(this.data);
        }
    }
}
