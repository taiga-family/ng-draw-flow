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
import {animationFrameScheduler, type Subscription} from 'rxjs';

import {
    type DfDragDrop,
    DragDropDirective,
    SelectableElementDirective,
} from '../../directives';
import {DRAW_FLOW_OPTIONS} from '../../ng-draw-flow.configs';
import {
    type DfDataInitialNode,
    type DfDataNode,
    type DfNodePositionAnimationEasing,
    type DfOptions,
    type DfPoint,
} from '../../ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
import {CoordinatesService} from '../../services/coordinates.service';
import {NgDrawFlowStoreService} from '../../services/ng-draw-flow-store.service';
import {DF_NODE_SIZE_REGISTRY} from '../../services/node-size-registry.service';
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
    private readonly nodeSizeRegistry = inject(DF_NODE_SIZE_REGISTRY);
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
    private renderedPositionValue: DfPoint | null = null;
    private positionAnimationFrameId: number | null = null;
    private readonly nodeConnectors: NodeConnectorsController;
    private readonly nodeInteraction: NodeInteractionController;
    private nodeSizeSyncSubscription: Subscription | null = null;

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
        this.refreshRenderedGeometry(false);
        this.syncNodeSizeRegistry();
        this.observeNodeSize();
    }

    public ngOnDestroy(): void {
        this.cancelPositionAnimation();
        this.cancelScheduledNodeSizeSync();

        if (!this.resolvedNodeValue) {
            this.nodeConnectors.disconnect();
            this.nodeGeometry.disconnect();

            return;
        }

        this.nodeInteraction.clearHighlightedConnectionsFor(this.getResolvedNode().id);
        this.nodeSizeRegistry?.remove(this.getResolvedNode().id);
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
        this.cancelPositionAnimationForInteraction();
        this.nodeInteraction.handleDrag(event);
    }

    protected isSelected(): boolean {
        return this.nodeInteraction.selected();
    }

    protected nodeClassName(): string {
        const classNames = ['draw-flow-node'];

        if (this.invalid()) {
            classNames.push('df-invalid');
        }

        if (this.isSelected()) {
            classNames.push('df-selected');
        }

        classNames.push(...this.getCustomClassNames());

        return classNames.join(' ');
    }

    private createNodeConnectorsController(): NodeConnectorsController {
        return new NodeConnectorsController({
            coordinatesService: this.coordinatesService,
            destroyRef: this.destroyRef,
            environmentInjector: this.environmentInjector,
            getCenteredPosition: (node) => this.nodeGeometry.getCenteredPosition(node),
            getNode: () => this.getResolvedNode(),
            getNodeContentRenderer: () => this.getNodeContentRenderer(),
            getZoom: () => this.panZoomService.snapshot().zoom,
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
                this.recalculateConnectorPositions(distance, zoom);
            },
            refreshRenderedGeometry: (dynamic) => {
                this.refreshRenderedGeometry(dynamic);
            },
            syncWorkspaceGeometry: () => {
                this.syncWorkspaceGeometry();
            },
        });
    }

    private getCustomClassNames(): string[] {
        const className = this.node().className;

        if (!className) {
            return [];
        }

        return Array.isArray(className) ? className : [className];
    }

    private initializeResolvedNode(): void {
        this.resolvedNodeValue = this.nodeGeometry.resolveNode(this.node());
        this.renderedPositionValue = {...this.resolvedNodeValue.position};
    }

    private applyNodeInputUpdate(node: DfDataInitialNode | DfDataNode): void {
        if (!this.resolvedNodeValue) {
            return;
        }

        const previousNode = this.resolvedNodeValue;

        this.resolvedNodeValue = this.nodeGeometry.resolveUpdatedNode(
            node,
            this.resolvedNodeValue,
        );

        const nodeTypeChanged =
            this.resolvedNodeValue.data.type !== previousNode.data.type;
        const positionChanged = this.nodeGeometry.hasPositionChanged(
            previousNode,
            this.resolvedNodeValue,
        );
        const startNodeChanged =
            (this.resolvedNodeValue.startNode === true) !==
            (previousNode.startNode === true);
        const endNodeChanged =
            (this.resolvedNodeValue.endNode === true) !== (previousNode.endNode === true);
        const nodeIdentityChanged = this.resolvedNodeValue.id !== previousNode.id;
        const nodeDataChanged = this.resolvedNodeValue.data !== previousNode.data;
        const connectionLabelChanged =
            this.resolvedNodeValue.data.connectionLabel !==
            previousNode.data.connectionLabel;
        const contentInputsChanged =
            nodeIdentityChanged || nodeDataChanged || startNodeChanged || endNodeChanged;

        if (
            !nodeTypeChanged &&
            !positionChanged &&
            !contentInputsChanged &&
            !connectionLabelChanged
        ) {
            return;
        }

        if (nodeTypeChanged) {
            this.createNodeContentComponent();
            this.measureNodeContent();
            this.nodeConnectors.watch();
        } else if (contentInputsChanged) {
            this.nodeContentHost.syncInputs(this.getNodeContentInputs());
        }

        if (nodeIdentityChanged) {
            this.nodeSizeRegistry?.remove(previousNode.id);
        }

        if (nodeTypeChanged || connectionLabelChanged) {
            this.nodeConnectors.applyOutputsConnectionLabel();
        }

        if (
            nodeTypeChanged ||
            positionChanged ||
            nodeIdentityChanged ||
            startNodeChanged ||
            endNodeChanged
        ) {
            const animating =
                positionChanged &&
                !nodeTypeChanged &&
                !nodeIdentityChanged &&
                this.animatePositionChange(
                    this.renderedPositionValue ?? previousNode.position,
                    this.resolvedNodeValue.position,
                );

            if (!animating) {
                this.refreshRenderedGeometry(false);
            }

            if (nodeTypeChanged || nodeIdentityChanged) {
                this.syncNodeSizeRegistry();
            }
        }
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
            this.scheduleNodeSizeSync();
        });
    }

    private scheduleNodeSizeSync(): void {
        if (this.nodeSizeSyncSubscription) {
            return;
        }

        this.nodeSizeSyncSubscription = animationFrameScheduler.schedule(() => {
            this.nodeSizeSyncSubscription = null;
            this.syncNodeSize();
        });
    }

    private cancelScheduledNodeSizeSync(): void {
        this.nodeSizeSyncSubscription?.unsubscribe();
        this.nodeSizeSyncSubscription = null;
    }

    private syncNodeSize(): void {
        this.measureNodeContent();
        this.refreshRenderedGeometry(false);
        this.syncNodeSizeRegistry();
    }

    private syncNodeSizeRegistry(): void {
        if (!this.nodeSizeRegistry || !this.resolvedNodeValue) {
            return;
        }

        this.nodeSizeRegistry.set(
            this.resolvedNodeValue.id,
            this.nodeGeometry.measureElement(this.nodeElementRef().nativeElement),
        );
    }

    private refreshRenderedGeometry(dynamic: boolean): void {
        this.renderPosition(this.getResolvedNode().position, dynamic);
    }

    private renderPosition(
        position: DfPoint,
        dynamic: boolean,
        translateConnectorCoordinates = false,
    ): void {
        const node = this.getResolvedNode();
        const centeredPosition = this.nodeGeometry.getCenteredPoint(position);

        this.nodeGeometry.applyPositionToStyle(
            this.nodeElementRef().nativeElement,
            centeredPosition,
            dynamic,
        );

        if (translateConnectorCoordinates && this.renderedPositionValue) {
            this.nodeConnectors.translateCoordinates({
                deltaX: position.x - this.renderedPositionValue.x,
                deltaY: position.y - this.renderedPositionValue.y,
            });
        } else {
            this.nodeConnectors.updateCoordinatesAt(centeredPosition, node.id);
        }

        this.nodeGeometry.syncWorkspaceGeometryAt(node.id, position);
        this.renderedPositionValue = {...position};
    }

    private recalculateConnectorPositions(
        distance: DfDragDrop['distance'],
        zoom: number,
    ): void {
        this.nodeConnectors.recalculatePositions(distance, zoom);
    }

    private syncWorkspaceGeometry(): void {
        this.nodeGeometry.syncWorkspaceGeometry(this.getResolvedNode());
    }

    private animatePositionChange(from: DfPoint, to: DfPoint): boolean {
        const animation = this.drawFlowOptions.positionAnimation;
        const duration = animation?.duration ?? 0;

        this.cancelPositionAnimation();

        if (
            (from.x === to.x && from.y === to.y) ||
            duration <= 0 ||
            typeof requestAnimationFrame !== 'function' ||
            this.prefersReducedMotion()
        ) {
            return false;
        }

        let startedAt: number | null = null;

        const renderFrame = (timestamp: number): void => {
            startedAt ??= timestamp;

            const progress = Math.min((timestamp - startedAt) / duration, 1);
            const eased = this.ease(progress, animation?.easing ?? 'ease-in-out');

            this.renderPosition(
                {
                    x: from.x + (to.x - from.x) * eased,
                    y: from.y + (to.y - from.y) * eased,
                },
                true,
                true,
            );

            if (progress < 1) {
                this.positionAnimationFrameId = requestAnimationFrame(renderFrame);

                return;
            }

            this.positionAnimationFrameId = null;
            this.refreshRenderedGeometry(false);
        };

        this.positionAnimationFrameId = requestAnimationFrame(renderFrame);

        return true;
    }

    private cancelPositionAnimationForInteraction(): void {
        if (this.positionAnimationFrameId === null || !this.renderedPositionValue) {
            return;
        }

        this.cancelPositionAnimation();
        this.resolvedNodeValue = {
            ...this.getResolvedNode(),
            position: {...this.renderedPositionValue},
        };
    }

    private cancelPositionAnimation(): void {
        if (
            this.positionAnimationFrameId !== null &&
            typeof cancelAnimationFrame === 'function'
        ) {
            cancelAnimationFrame(this.positionAnimationFrameId);
        }

        this.positionAnimationFrameId = null;
    }

    private prefersReducedMotion(): boolean {
        return (
            typeof matchMedia === 'function' &&
            matchMedia('(prefers-reduced-motion: reduce)').matches
        );
    }

    private ease(progress: number, easing: DfNodePositionAnimationEasing): number {
        if (easing === 'linear') {
            return progress;
        }

        return progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
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
