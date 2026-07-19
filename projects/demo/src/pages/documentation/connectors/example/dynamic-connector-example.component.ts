import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    inject,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    DfArrowhead,
    DfConnectionPoint,
    DfConnectionType,
    type DfDataConnection,
    type DfDataConnectorConfig,
    type DfDataModel,
    type DfDataNode,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';
import {
    DfAutoLayoutService,
    DfNodeSizingStrategy,
    DfTreeLayoutDirection,
    provideNgDrawFlowLayouts,
} from '@ng-draw-flow/layouts';

import {DynamicConnectorExampleActionsService} from './dynamic-connector-example-actions.service';
import {DynamicConnectorExampleNodeComponent} from './dynamic-connector-example-node.component';

@Component({
    standalone: true,
    selector: 'dynamic-connector-example',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    template: `
        <div class="editor">
            <ng-draw-flow [formControl]="form" />
        </div>
    `,
    styles: `
        :host {
            display: block;
        }

        .editor {
            block-size: 22rem;
            background: #fff;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DynamicConnectorExampleActionsService,
        dfPanZoomOptionsProvider({leftPosition: 60, topPosition: null}),
        provideNgDrawFlowConfigs({
            connection: {
                type: DfConnectionType.SmoothStep,
                arrowhead: {type: DfArrowhead.ArrowClosed},
                curvature: 12,
            },
            nodes: {dynamicConnectorExample: DynamicConnectorExampleNodeComponent},
            options: {
                nodesDraggable: false,
                connectionsCreatable: false,
                connectionsDeletable: false,
            },
            positionAnimation: {duration: 240, easing: 'ease-in-out'},
        }),
        provideNgDrawFlowLayouts({
            tree: {
                direction: DfTreeLayoutDirection.LeftToRight,
                nodeSizing: {
                    strategy: DfNodeSizingStrategy.Measured,
                    fallback: {width: 176, height: 64},
                },
                levelGap: 80,
                siblingGap: 24,
            },
        }),
    ],
})
export default class DynamicConnectorExampleComponent implements AfterViewInit {
    private readonly actions = inject(DynamicConnectorExampleActionsService);
    private readonly autoLayout = inject(DfAutoLayoutService);
    private counter = 2;

    public readonly form = new FormControl<DfDataModel>(
        {
            nodes: [
                this.createNode('root', 'Root', 0, true),
                this.createNode('node-1', 'Node 1', 260),
            ],
            connections: [this.createConnection('root', 'node-1')],
        },
        {nonNullable: true},
    );

    constructor() {
        this.actions.configure((connector) => this.addChild(connector));
    }

    public ngAfterViewInit(): void {
        this.autoLayout.apply();
    }

    private addChild({nodeId, connectorId}: DfDataConnectorConfig): void {
        const model = this.form.getRawValue();
        const parent = model.nodes.find(({id}) => id === nodeId);

        if (!parent) {
            return;
        }

        const id = `node-${this.counter++}`;
        const position = 'position' in parent ? parent.position : {x: 0, y: 0};
        const child = this.createNode(id, `Node ${this.counter - 1}`, position.x);

        this.autoLayout.apply({
            anchorNodeId: nodeId,
            model: {
                nodes: [...model.nodes, child],
                connections: [
                    ...model.connections,
                    this.createConnection(nodeId, id, connectorId),
                ],
            },
        });
    }

    private createNode(
        id: string,
        title: string,
        x: number,
        startNode = false,
    ): DfDataNode {
        return {
            id,
            data: {type: 'dynamicConnectorExample', title},
            position: {x, y: 0},
            startNode,
        };
    }

    private createConnection(
        sourceId: string,
        targetId: string,
        sourceConnectorId = `${sourceId}-output-1`,
    ): DfDataConnection {
        return {
            source: {
                nodeId: sourceId,
                connectorType: DfConnectionPoint.Output,
                connectorId: sourceConnectorId,
            },
            target: {
                nodeId: targetId,
                connectorType: DfConnectionPoint.Input,
                connectorId: `${targetId}-input-1`,
            },
        };
    }
}
