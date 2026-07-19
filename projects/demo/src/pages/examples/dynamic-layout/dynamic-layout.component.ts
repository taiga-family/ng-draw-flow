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
    type DfDataInitialNode,
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
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiButton} from '@taiga-ui/core';

import {DynamicLayoutActionsService} from './dynamic-layout-actions.service';
import {DynamicLayoutFormNodeComponent} from './dynamic-layout-form-node.component';
import {DynamicLayoutNodeComponent} from './dynamic-layout-node.component';

@Component({
    standalone: true,
    selector: 'dynamic-layout',
    imports: [NgDrawFlowComponent, ReactiveFormsModule, TuiAddonDoc, TuiButton],
    templateUrl: './dynamic-layout.component.html',
    styleUrl: './dynamic-layout.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        DynamicLayoutActionsService,
        dfPanZoomOptionsProvider({
            leftPosition: 48,
            topPosition: null,
        }),
        provideNgDrawFlowConfigs({
            connection: {
                type: DfConnectionType.SmoothStep,
                arrowhead: {type: DfArrowhead.ArrowClosed},
                curvature: 16,
            },
            nodes: {
                dynamicFormNode: DynamicLayoutFormNodeComponent,
                dynamicNode: DynamicLayoutNodeComponent,
            },
            options: {
                nodesDraggable: false,
                connectionsCreatable: false,
                connectionsDeletable: false,
            },
            positionAnimation: {
                duration: 280,
                easing: 'ease-in-out',
            },
        }),
        provideNgDrawFlowLayouts({
            tree: {
                direction: DfTreeLayoutDirection.LeftToRight,
                nodeSizing: {
                    strategy: DfNodeSizingStrategy.Measured,
                    fallback: {width: 160, height: 64},
                },
                levelGap: 96,
                siblingGap: 32,
            },
        }),
    ],
})
export default class DynamicLayoutComponent implements AfterViewInit {
    private readonly actions = inject(DynamicLayoutActionsService);
    private readonly autoLayout = inject(DfAutoLayoutService);

    private counter = 1;

    public readonly form = new FormControl<DfDataModel>(this.createInitialModel(), {
        nonNullable: true,
    });

    constructor() {
        this.actions.configure({
            addChild: ({nodeId, connectorId}) => this.addChild(nodeId, connectorId),
        });
    }

    public ngAfterViewInit(): void {
        this.autoLayout.apply();
    }

    public reset(): void {
        this.counter = 1;
        this.autoLayout.apply({model: this.createInitialModel()});
    }

    private createInitialModel(): DfDataModel {
        const root: DfDataNode = {
            id: 'root',
            data: {type: 'dynamicNode', title: 'Root'},
            position: {x: 0, y: 0},
            startNode: true,
        };
        const firstChild = this.createChild(root);
        const secondChild = this.createChild(root);

        return {
            nodes: [root, firstChild, secondChild],
            connections: [
                this.createConnection(root.id, firstChild.id),
                this.createConnection(root.id, secondChild.id),
            ],
        };
    }

    private addChild(parentId: string, sourceConnectorId: string): void {
        const model = this.form.getRawValue();
        const parent = model.nodes.find(({id}) => id === parentId);

        if (!parent) {
            return;
        }

        const child = this.createChild(parent);

        this.applyMutation(
            {
                ...model,
                nodes: [...model.nodes, child],
                connections: [
                    ...model.connections,
                    this.createConnection(parentId, child.id, sourceConnectorId),
                ],
            },
            parentId,
        );
    }

    private applyMutation(model: DfDataModel, anchorNodeId: string): void {
        this.autoLayout.apply({anchorNodeId, model});
    }

    private createChild(parent: DfDataInitialNode | DfDataNode): DfDataNode {
        const number = this.counter++;
        const id = `node-${number}`;
        const formNode = number % 2 === 0;
        let title = `Node ${number}`;

        if (formNode) {
            title = `Form ${number}`;
        } else if (number % 3 === 0) {
            title = `Node ${number} with variable width`;
        }

        return {
            id,
            data: {
                type: formNode ? 'dynamicFormNode' : 'dynamicNode',
                title,
            },
            position: this.getPosition(parent),
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

    private getPosition(node: DfDataInitialNode | DfDataNode): {
        x: number;
        y: number;
    } {
        return 'position' in node ? {...node.position} : {x: 0, y: 0};
    }
}
