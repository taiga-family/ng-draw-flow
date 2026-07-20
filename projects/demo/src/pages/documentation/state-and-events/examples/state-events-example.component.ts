import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    DfArrowhead,
    DfConnectionPoint,
    DfConnectionType,
    type DfDataConnection,
    type DfDataModel,
    type DfDataNode,
    type DfEvent,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
    NgDrawFlowStoreService,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';
import {TuiButton, TuiIcon} from '@taiga-ui/core';

import {SimpleNodeComponent} from '../../../../app/modules/nodes';

interface EventEntry {
    readonly id: number;
    readonly text: string;
}

@Component({
    standalone: true,
    selector: 'state-events-example',
    imports: [NgDrawFlowComponent, ReactiveFormsModule, TuiButton, TuiIcon],
    templateUrl: './state-events-example.component.html',
    styleUrl: './state-events-example.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        NgDrawFlowStoreService,
        dfPanZoomOptionsProvider({leftPosition: 40}),
        provideNgDrawFlowConfigs({
            connection: {
                type: DfConnectionType.SmoothStep,
                arrowhead: {type: DfArrowhead.ArrowClosed},
                curvature: 12,
            },
            nodes: {simpleNode: SimpleNodeComponent},
            positionAnimation: {duration: 220, easing: 'ease-in-out'},
        }),
    ],
})
export default class StateEventsExampleComponent {
    private readonly eventEntries = signal<EventEntry[]>([{id: 0, text: 'Editor ready'}]);
    private eventId = 0;
    private nodeId = 3;

    public readonly store = inject(NgDrawFlowStoreService);
    public readonly events = this.eventEntries.asReadonly();
    public readonly selectedConnection = computed(() => {
        const connection = this.store.selectedConnection();

        return connection
            ? `${connection.source.nodeId} -> ${connection.target.nodeId}`
            : 'None';
    });

    public readonly form = new FormControl<DfDataModel>(this.createModel(), {
        nonNullable: true,
    });

    public addNode(): void {
        const model = this.form.getRawValue();
        const id = `node-${this.nodeId++}`;
        const node = {
            id,
            data: {type: 'simpleNode', text: `Node ${id.slice(5)}`},
        };

        this.store.setDataModel({...model, nodes: [...model.nodes, node]});
        this.record(`Added ${id}`);
    }

    public removeSelectedNode(): void {
        const node = this.store.selectedNode();

        if (node) {
            this.store.removeNode(node.id);
        }
    }

    public recordScale(scale: number): void {
        this.record(`Scale ${scale}%`);
    }

    public recordNode(action: string, node: DfDataNode): void {
        this.record(`${action}: ${node.id}`);
    }

    public recordNodeEvent(action: string, event: DfEvent<DfDataNode>): void {
        this.record(`${action}: ${event.target.id}`);
    }

    public recordConnection(action: string, connection: DfDataConnection): void {
        this.record(
            `${action}: ${connection.source.nodeId} -> ${connection.target.nodeId}`,
        );
    }

    public recordConnectionEvent(action: string, event: DfEvent<DfDataConnection>): void {
        this.recordConnection(action, event.target);
    }

    private record(text: string): void {
        this.eventEntries.update((events) => [
            {id: ++this.eventId, text},
            ...events.slice(0, 5),
        ]);
    }

    private createModel(): DfDataModel {
        return {
            nodes: [
                {
                    id: 'node-1',
                    data: {type: 'simpleNode', text: 'Source'},
                    position: {x: 0, y: 0},
                    startNode: true,
                },
                {
                    id: 'node-2',
                    data: {type: 'simpleNode', text: 'Target'},
                    position: {x: 260, y: 80},
                    endNode: true,
                },
            ],
            connections: [
                {
                    source: {
                        nodeId: 'node-1',
                        connectorType: DfConnectionPoint.Output,
                        connectorId: 'node-1-output-1',
                    },
                    target: {
                        nodeId: 'node-2',
                        connectorType: DfConnectionPoint.Input,
                        connectorId: 'node-2-input-1',
                    },
                },
            ],
        };
    }
}
