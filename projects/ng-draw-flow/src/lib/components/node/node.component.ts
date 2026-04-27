import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    computed,
    DestroyRef,
    effect,
    type ElementRef,
    EnvironmentInjector,
    inject,
    input,
    type OnDestroy,
    output,
    untracked,
    viewChild,
    ViewContainerRef,
} from '@angular/core';

import {
    type DfDragDrop,
    DragDropDirective,
    SelectableElementDirective,
} from '../../directives';
import {DRAW_FLOW_OPTIONS} from '../../ng-draw-flow.configs';
import {
    type DfDataInitialNode,
    type DfDataNode,
    type DfOptions,
} from '../../ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
import {CoordinatesService} from '../../services/coordinates.service';
import {NgDrawFlowStoreService} from '../../services/ng-draw-flow-store.service';
import {ConnectionsService} from '../connections/connections.service';
import {DF_PAN_ZOOM_OPTIONS} from '../pan-zoom/pan-zoom.options';
import {PanZoomService} from '../pan-zoom/pan-zoom.service';
import {NodeConnectorsController} from './node-connectors.controller';
import {NodeContentHost} from './node-content.host';
import {
    type DfNodeContentInputs,
    type DfNodeContentRenderer,
} from './node-content.renderer';
import {NodeGeometryController} from './node-geometry.controller';
import {NodeInteractionController} from './node-interaction.controller';

@Component({
    standalone: true,
    selector: 'df-node',
    imports: [DragDropDirective, SelectableElementDirective],
    templateUrl: './node.component.html',
    styleUrl: './node.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(document:keydown.backspace)': 'this.handleKeyboardEvent($event)',
        '(document:keydown.delete)': 'this.handleKeyboardEvent($event)',
    },
})
export class NodeComponent implements AfterViewInit, OnDestroy {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);
    private readonly panZoomService = inject(PanZoomService);
    private readonly coordinatesService = inject(CoordinatesService);
    private readonly store = inject(NgDrawFlowStoreService);
    private readonly drawFlowOptions = inject<DfOptions>(DRAW_FLOW_OPTIONS);
    private readonly environmentInjector = inject(EnvironmentInjector);
    private readonly drawFlowComponents = this.drawFlowOptions.nodes;
    private readonly connectionsService = inject(ConnectionsService);

    private readonly nodeGeometry = new NodeGeometryController({
        drawFlowElement: inject<HTMLElement>(DRAW_FLOW_ROOT_ELEMENT),
        panZoomOptions: inject(DF_PAN_ZOOM_OPTIONS),
        panZoomService: this.panZoomService,
    });

    private readonly nodeContentHost = new NodeContentHost(this.environmentInjector);

    private resolvedNodeValue: DfDataNode | null = null;
    private readonly nodeConnectors: NodeConnectorsController;
    private readonly nodeInteraction: NodeInteractionController;

    public readonly nodeElementRef =
        viewChild.required<ElementRef<HTMLElement>>('nodeElement');

    public readonly containerRef = viewChild.required('container', {
        read: ViewContainerRef,
    });

    public readonly node = input.required<DfDataInitialNode | DfDataNode>();

    public readonly invalid = input(false);

    public readonly nodeMoved = output<DfDataNode>();
    public readonly nodeDeleted = output();
    public readonly nodeSelected = output<DfDataNode>();
    public readonly connectorDeleted = output<string>();

    public readonly cursor = computed(() => this.nodeInteraction.cursor());

    constructor() {
        this.nodeConnectors = this.createNodeConnectorsController();
        this.nodeInteraction = this.createNodeInteractionController();

        effect(() => {
            const nodeContentRenderer = this.nodeContentHost.renderer();

            if (!nodeContentRenderer) {
                return;
            }

            this.nodeContentHost.syncInputs(this.getNodeContentInputs());
        });

        effect(() => {
            const node = this.node();

            untracked(() => {
                this.applyNodeInputUpdate(node);
            });
        });
    }

    public ngAfterViewInit(): void {
        this.initializeResolvedNode();
        this.createNodeContentComponent();
        this.measureNodeContent();
        this.nodeConnectors.applyOutputsConnectionLabel();
        this.nodeConnectors.watch();
        this.syncWorkspaceGeometry();
        this.refreshRenderedGeometry(false);
        this.observeNodeSize();
    }

    public ngOnDestroy(): void {
        if (!this.resolvedNodeValue) {
            this.nodeConnectors.disconnect();
            this.nodeGeometry.disconnect();

            return;
        }

        this.nodeInteraction.clearHighlightedConnectionsFor(this.getResolvedNode().id);
        this.nodeConnectors.disconnect();
        this.nodeGeometry.disconnect();
        this.nodeGeometry.removeWorkspaceGeometry(this.getResolvedNode().id);
    }

    protected handleKeyboardEvent(event: KeyboardEvent): void {
        this.nodeInteraction.handleKeyboardEvent(event);
    }

    protected createNodeContentComponent(): void {
        const nodeType = this.getResolvedNode().data.type;
        const nodeContentComponent = this.getNodeContentComponent(nodeType);

        const nodeContentRenderer = this.nodeContentHost.renderComponent(
            this.containerRef(),
            nodeContentComponent,
        );

        nodeContentRenderer.syncInputs(this.getNodeContentInputs());

        this.cdr.detectChanges();
    }

    protected onSelectedChanged(selected: boolean): void {
        this.nodeInteraction.setSelected(selected);
    }

    protected onDrag(event: DfDragDrop): void {
        this.nodeInteraction.handleDrag(event);
    }

    private createNodeConnectorsController(): NodeConnectorsController {
        return new NodeConnectorsController({
            coordinatesService: this.coordinatesService,
            destroyRef: this.destroyRef,
            environmentInjector: this.environmentInjector,
            getCenteredPosition: (node) => this.nodeGeometry.getCenteredPosition(node),
            getNode: () => this.getResolvedNode(),
            getNodeContentRenderer: () => this.getNodeContentRenderer(),
            onConnectorDeleted: (connectorId) => {
                this.connectorDeleted.emit(connectorId);
            },
        });
    }

    private createNodeInteractionController(): NodeInteractionController {
        return new NodeInteractionController({
            connectionsService: this.connectionsService,
            deletable: this.drawFlowOptions.options.nodesDeletable,
            draggable: this.drawFlowOptions.options.nodesDraggable,
            getCenteredPosition: (node) => this.nodeGeometry.getCenteredPosition(node),
            getNode: () => this.getResolvedNode(),
            isStartNode: () => this.node().startNode === true,
            nodeDragThreshold: this.drawFlowOptions.options.nodeDragThreshold,
            panZoomService: this.panZoomService,
            store: this.store,
            applyPositionToStyle: (position, dynamic) => {
                this.nodeGeometry.applyPositionToStyle(
                    this.nodeElementRef().nativeElement,
                    position,
                    dynamic,
                );
            },
            clampPosition: (position) =>
                this.nodeGeometry.clampPositionToPanBounds(position),
            emitNodeDeleted: () => {
                this.nodeDeleted.emit();
            },
            emitNodeMoved: (node) => {
                this.nodeMoved.emit(node);
            },
            emitNodeSelected: (node) => {
                this.nodeSelected.emit(node);
            },
            recalculateConnectorsPosition: (distance, zoom) => {
                this.nodeConnectors.recalculatePositions(distance, zoom);
            },
            refreshRenderedGeometry: (dynamic) => {
                this.refreshRenderedGeometry(dynamic);
            },
            syncWorkspaceGeometry: () => {
                this.syncWorkspaceGeometry();
            },
        });
    }

    private initializeResolvedNode(): void {
        this.resolvedNodeValue = this.nodeGeometry.resolveNode(this.node());
    }

    private applyNodeInputUpdate(node: DfDataInitialNode | DfDataNode): void {
        if (!this.resolvedNodeValue) {
            return;
        }

        const previousNodeType = this.resolvedNodeValue.data.type;

        this.resolvedNodeValue = this.nodeGeometry.resolveUpdatedNode(
            node,
            this.resolvedNodeValue,
        );

        if (this.resolvedNodeValue.data.type !== previousNodeType) {
            this.createNodeContentComponent();
            this.measureNodeContent();
            this.nodeConnectors.watch();
        }

        this.nodeContentHost.syncInputs(this.getNodeContentInputs());
        this.nodeConnectors.applyOutputsConnectionLabel();
        this.syncWorkspaceGeometry();
        this.refreshRenderedGeometry(false);
    }

    private getResolvedNode(): DfDataNode {
        if (!this.resolvedNodeValue) {
            throw new Error('NodeComponent resolved node is not initialized');
        }

        return this.resolvedNodeValue;
    }

    private measureNodeContent(): void {
        this.nodeGeometry.measureContent(this.nodeContentHost.nativeElement());
    }

    private observeNodeSize(): void {
        this.nodeGeometry.observeNodeSize(this.nodeElementRef().nativeElement, () => {
            this.measureNodeContent();
            this.syncWorkspaceGeometry();
            this.refreshRenderedGeometry(false);
        });
    }

    private refreshRenderedGeometry(dynamic: boolean): void {
        this.nodeGeometry.applyPositionToStyle(
            this.nodeElementRef().nativeElement,
            this.nodeGeometry.getCenteredPosition(this.getResolvedNode()),
            dynamic,
        );
        this.nodeConnectors.updateCoordinates();
    }

    private syncWorkspaceGeometry(): void {
        this.nodeGeometry.syncWorkspaceGeometry(this.getResolvedNode());
    }

    private getNodeContentComponent(nodeType: string): DfOptions['nodes'][string] {
        const nodeContentComponent = this.drawFlowComponents[nodeType];

        if (!nodeContentComponent) {
            throw new Error(
                `NodeComponent cannot render node "${this.getResolvedNode().id}" because node type "${nodeType}" is not registered`,
            );
        }

        return nodeContentComponent;
    }

    private getNodeContentRenderer(): DfNodeContentRenderer {
        const nodeContentRenderer = this.nodeContentHost.renderer();

        if (!nodeContentRenderer) {
            throw new Error('NodeComponent content renderer is not initialized');
        }

        return nodeContentRenderer;
    }

    private getNodeContentInputs(): DfNodeContentInputs {
        const node = this.getResolvedNode();

        return {
            nodeId: node.id,
            startNode: node.startNode === true,
            endNode: node.endNode === true,
            model: node.data,
            selected: this.nodeInteraction.selected(),
            invalid: this.invalid(),
        };
    }
}
