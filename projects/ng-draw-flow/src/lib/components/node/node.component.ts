import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    type ComponentRef,
    DestroyRef,
    effect,
    type ElementRef,
    EnvironmentInjector,
    inject,
    input,
    type OnDestroy,
    output,
    runInInjectionContext,
    signal,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import {
    outputToObservable,
    takeUntilDestroyed,
    toObservable,
} from '@angular/core/rxjs-interop';
import {merge, type Observable, tap} from 'rxjs';

import {INITIAL_COORDINATES} from '../../consts';
import {
    type DfDragDrop,
    type DfDragDropDistance,
    DfDragDropStage,
    DragDropDirective,
    SelectableElementDirective,
} from '../../directives';
import {createConnectorHash} from '../../helpers';
import {DRAW_FLOW_OPTIONS} from '../../ng-draw-flow.configs';
import {
    DfConnectionPoint,
    type DfDataInitialNode,
    type DfDataNode,
    type DfOptions,
    type DfPoint,
} from '../../ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
import {type DrawFlowBaseNode} from '../../ng-draw-flow-node.base';
import {CoordinatesService} from '../../services/coordinates.service';
import {NgDrawFlowStoreService} from '../../services/ng-draw-flow-store.service';
import {ConnectionsService} from '../connections/connections.service';
import {type DfInputComponent, type DfOutputComponent} from '../connectors';
import {getViewportZeroPoint} from '../pan-zoom/pan-zoom.camera.math';
import {DF_PAN_ZOOM_OPTIONS} from '../pan-zoom/pan-zoom.options';
import {PanZoomService} from '../pan-zoom/pan-zoom.service';

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
    private readonly nodeDragThreshold = this.drawFlowOptions.options.nodeDragThreshold;
    private readonly draggable = this.drawFlowOptions.options.nodesDraggable;
    private readonly deletable = this.drawFlowOptions.options.nodesDeletable;
    private readonly connectionsService = inject(ConnectionsService);
    private readonly drawFlowElement = inject<HTMLElement>(DRAW_FLOW_ROOT_ELEMENT);
    private readonly panZoomOptions = inject(DF_PAN_ZOOM_OPTIONS);
    private innerComponent!: DrawFlowBaseNode;
    private readonly nodeContentComponentRef =
        signal<ComponentRef<DrawFlowBaseNode> | null>(null);

    private nodeWidth!: number;
    private nodeHeight!: number;
    private readonly selected = signal(false);
    private value!: DfDataNode;
    private accumulatedDelta = INITIAL_COORDINATES;
    private previousInputs: DfInputComponent[] = [];
    private previousOutputs: DfOutputComponent[] = [];
    private moved = false;
    private resizeObserver: ResizeObserver | null = null;

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

    public cursor: 'grabbing' | 'initial' = 'initial';

    constructor() {
        effect(() => {
            const nodeContentComponentRef = this.nodeContentComponentRef();

            if (!nodeContentComponentRef) {
                return;
            }

            this.syncNodeContentInputs(nodeContentComponentRef);
        });
    }

    public ngAfterViewInit(): void {
        this.fillValue();
        this.createNodeContentComponent();
        this.saveInnerNodeSize();
        this.applyOutputsConnectionLabel();
        this.subscribeToConnectorsChanges();
        this.syncWorkspaceGeometry();
        this.refreshRenderedGeometry(false);
        this.observeNodeSize();
    }

    public ngOnDestroy(): void {
        if (!this.value) {
            this.resizeObserver?.disconnect();

            return;
        }

        if (this.connectionsService.selectedNodeId() === this.value.id) {
            this.connectionsService.highlightConnectionsForNode(null);
        }

        this.resizeObserver?.disconnect();
        this.panZoomService.removeNodeBounds(this.value.id);
    }

    protected handleKeyboardEvent(event: KeyboardEvent): void {
        if (this.selected() && this.deletable && !this.node().startNode) {
            event.preventDefault();

            this.store.clearSelectedNode(this.value.id);
            this.nodeDeleted.emit();
        }
    }

    protected createNodeContentComponent(): void {
        const nodeType = this.value.data.type;

        this.containerRef().clear();
        this.nodeContentComponentRef.set(null);

        const nodeContentComponentRef = this.containerRef().createComponent(
            this.drawFlowComponents[nodeType]!,
            {
                environmentInjector: this.environmentInjector,
            },
        );

        this.syncNodeContentInputs(nodeContentComponentRef);
        this.innerComponent = nodeContentComponentRef.instance;
        this.nodeContentComponentRef.set(nodeContentComponentRef);

        this.cdr.detectChanges();
    }

    protected onSelectedChanged(selected: boolean): void {
        this.selected.set(selected);

        if (selected) {
            this.connectionsService.highlightConnectionsForNode(this.value.id);
            this.store.emitNodeSelected(this.value);
            this.nodeSelected.emit(this.value);
        } else {
            this.connectionsService.highlightConnectionsForNode(null);
            this.store.clearSelectedNode(this.value.id);
        }
    }

    protected onDrag(event: DfDragDrop): void {
        if (this.node().startNode || !this.draggable) {
            return;
        }

        if (event.stage === DfDragDropStage.Move) {
            this.onDragMove(event.distance);
        } else {
            this.onDragEnd();
        }
    }

    private onDragMove(distance: DfDragDropDistance): void {
        const {zoom} = this.panZoomService.snapshot();

        if (distance.deltaX || distance.deltaY) {
            this.moved = true;
        }

        this.cursor = 'grabbing';
        this.panZoomService.setDisabled(true);

        // Accumulate offset
        this.accumulatedDelta.x += distance.deltaX / zoom;
        this.accumulatedDelta.y += distance.deltaY / zoom;

        const applyX = Math.abs(this.accumulatedDelta.x) >= this.nodeDragThreshold;
        const applyY = Math.abs(this.accumulatedDelta.y) >= this.nodeDragThreshold;

        if (applyX || applyY) {
            const previousPosition = {...this.value.position};
            const requestedDeltaX = applyX ? this.accumulatedDelta.x : 0;
            const requestedDeltaY = applyY ? this.accumulatedDelta.y : 0;
            const unclampedPosition = {
                x: this.value.position.x + requestedDeltaX,
                y: this.value.position.y + requestedDeltaY,
            };

            this.value.position = this.clampPositionToPanBounds(unclampedPosition);
            const appliedDeltaX = this.value.position.x - previousPosition.x;
            const appliedDeltaY = this.value.position.y - previousPosition.y;

            this.syncWorkspaceGeometry();
            const centeredPosition = this.getCenteredPosition();

            this.applyPositionToStyle(centeredPosition, true);
            this.recalculateConnectorsPosition({
                deltaX: appliedDeltaX * zoom,
                deltaY: appliedDeltaY * zoom,
            });

            // Reset only used directions
            if (applyX) {
                this.accumulatedDelta.x = 0;
            }

            if (applyY) {
                this.accumulatedDelta.y = 0;
            }
        }
    }

    private onDragEnd(): void {
        this.cursor = 'initial';

        if (this.moved) {
            this.nodeMoved.emit(this.value);
            this.refreshRenderedGeometry(false);
        }

        this.accumulatedDelta = INITIAL_COORDINATES;
        this.moved = false;
        this.panZoomService.setDisabled(false);
    }

    private fillValue(): void {
        const node = this.node();

        if (this.hasPosition(node)) {
            this.value = node;
        } else {
            this.value = {
                ...node,
                position: this.getCenterOfViewport(),
            };
        }
    }

    private saveInnerNodeSize(): void {
        const nativeElement = this.nodeContentComponentRef()?.location.nativeElement;

        if (!nativeElement) {
            return;
        }

        this.nodeWidth = nativeElement.offsetWidth;
        this.nodeHeight = nativeElement.offsetHeight;
    }

    private syncNodeContentInputs(
        nodeContentComponentRef: ComponentRef<DrawFlowBaseNode>,
    ): void {
        const node = this.node();

        nodeContentComponentRef.setInput('nodeId', this.value.id);
        nodeContentComponentRef.setInput('startNode', node.startNode === true);
        nodeContentComponentRef.setInput('endNode', node.endNode === true);
        nodeContentComponentRef.setInput('model', this.value.data);
        nodeContentComponentRef.setInput('selected', this.selected());
        nodeContentComponentRef.setInput('invalid', this.invalid());
    }

    private updateConnectorsCoordinates(): void {
        const centeredCoordinates = this.getCenteredPosition();

        this.innerComponent.inputs().forEach((input: DfInputComponent) => {
            this.updateConnectorCoordinates(
                centeredCoordinates,
                this.value.id,
                input,
                DfConnectionPoint.Input,
            );
        });

        this.innerComponent.outputs().forEach((output: DfOutputComponent) => {
            this.updateConnectorCoordinates(
                centeredCoordinates,
                this.value.id,
                output,
                DfConnectionPoint.Output,
            );
        });
    }

    private recalculateConnectorsPosition(distance: DfDragDropDistance): void {
        const {zoom} = this.panZoomService.snapshot();
        const currentMoveDistance = {
            deltaX: distance.deltaX / zoom,
            deltaY: distance.deltaY / zoom,
        };

        this.innerComponent.inputs().forEach((input: DfInputComponent) => {
            this.recalculateConnectorPositionFromLast(
                currentMoveDistance,
                input,
                DfConnectionPoint.Input,
            );
        });

        this.innerComponent.outputs().forEach((output: DfOutputComponent) => {
            this.recalculateConnectorPositionFromLast(
                currentMoveDistance,
                output,
                DfConnectionPoint.Output,
            );
        });
    }

    private recalculateConnectorPositionFromLast(
        distance: DfDragDropDistance,
        connector: DfInputComponent | DfOutputComponent,
        connectorType: DfConnectionPoint,
    ): void {
        const newConnectorPosition = {
            x: (connector.coordinates?.x ?? 0) + distance.deltaX,
            y: (connector.coordinates?.y ?? 0) + distance.deltaY,
        };

        const connectorData = createConnectorHash({
            nodeId: connector.data.nodeId,
            connectorType,
            connectorId: connector.data.connectorId,
        });

        connector.coordinates = newConnectorPosition;

        this.coordinatesService.addConnectionPoint(
            connectorData,
            newConnectorPosition,
            connector.position,
        );
    }

    private updateConnectorCoordinates(
        position: DfPoint,
        nodeId: string,
        connector: DfInputComponent | DfOutputComponent,
        connectorType: DfConnectionPoint,
    ): void {
        const calculatedConnectorPosition = this.calculateConnectorPosition(
            connector.nativeElement,
            position,
        );

        connector.coordinates = calculatedConnectorPosition;

        const connectorData = createConnectorHash({
            nodeId,
            connectorType,
            connectorId: connector.nativeElement.dataset.connectorId,
        });

        this.coordinatesService.addConnectionPoint(
            connectorData,
            calculatedConnectorPosition,
            connector.position,
        );
    }

    private calculateConnectorPosition(
        element: HTMLElement,
        nodePosition: DfPoint,
    ): DfPoint {
        let x = nodePosition.x + element.offsetLeft + element.clientWidth / 2;
        let y = nodePosition.y + element.offsetTop + element.clientHeight / 2;

        while (element && !element.hasAttribute('data-draw-flow-node')) {
            element = element.offsetParent as HTMLElement;

            if (element) {
                x += element.offsetLeft;
                y += element.offsetTop;
            }
        }

        return {x, y};
    }

    private applyPositionToStyle(position: DfPoint, dynamic: boolean): void {
        this.nodeElementRef().nativeElement.style.transform = dynamic
            ? `translate3D(${position.x}px, ${position.y}px, 0)`
            : `translate(${position.x}px, ${position.y}px)`;
    }

    private getCenteredPosition(): DfPoint {
        const halfOfNodeWidth = this.nodeWidth / 2;
        const halfOfNodeHeight = this.nodeHeight / 2;

        return {
            x: this.value.position.x - halfOfNodeWidth,
            y: this.value.position.y - halfOfNodeHeight,
        };
    }

    private subscribeToConnectorsChanges(): void {
        if (!this.innerComponent) {
            return;
        }

        this.previousOutputs = [...this.innerComponent.outputs()];
        this.previousInputs = [...this.innerComponent.inputs()];

        const connectorsUpdates$ = this.collectConnectorUpdateSources();

        if (connectorsUpdates$.length > 0) {
            merge(...connectorsUpdates$)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe(() => this.updateConnectorsCoordinates());
        }
    }

    private getCenterOfViewport(): DfPoint {
        const {x: cameraX, y: cameraY, zoom} = this.panZoomService.snapshot();
        const viewportWidth = this.drawFlowElement.offsetWidth;
        const viewportHeight = this.drawFlowElement.offsetHeight;
        const viewportCenterX = viewportWidth / 2;
        const viewportCenterY = viewportHeight / 2;
        const zeroPoint = getViewportZeroPoint(
            {width: viewportWidth, height: viewportHeight},
            {
                leftPosition: this.panZoomOptions.leftPosition,
                topPosition: this.panZoomOptions.topPosition,
            },
        );

        return {
            x: (viewportCenterX - zeroPoint.x - cameraX) / zoom,
            y: (viewportCenterY - zeroPoint.y - cameraY) / zoom,
        };
    }

    private hasPosition(node: DfDataInitialNode | DfDataNode): node is DfDataNode {
        const position = (node as DfDataNode).position;

        return !!position && Number.isFinite(position.x) && Number.isFinite(position.y);
    }

    private clampPositionToPanBounds(position: DfPoint): DfPoint {
        return position;
    }

    /**
     * Collects all sources of connector updates
     */
    private collectConnectorUpdateSources(): Array<Observable<void>> {
        const sources: Array<Observable<void>> = [];

        this.addContentComponentUpdates(sources);
        this.addInputsUpdates(sources);
        this.addOutputsUpdates(sources);

        return sources;
    }

    /**
     * Adds updates from the node content component
     */
    private addContentComponentUpdates(sources: Array<Observable<void>>): void {
        if (this.innerComponent?.connectorsUpdated) {
            sources.push(outputToObservable(this.innerComponent.connectorsUpdated));
        }
    }

    /**
     * Adds updates from inputs
     */
    private addInputsUpdates(sources: Array<Observable<any>>): void {
        runInInjectionContext(this.environmentInjector, () => {
            sources.push(
                toObservable(this.innerComponent.inputs).pipe(
                    tap((currentInputs: readonly DfInputComponent[]) => {
                        this.handleRemovedInputs(currentInputs);
                    }),
                ),
            );
        });
    }

    /**
     * Adds updates from outputs with handling for removed items
     */
    private addOutputsUpdates(sources: Array<Observable<any>>): void {
        runInInjectionContext(this.environmentInjector, () => {
            sources.push(
                toObservable(this.innerComponent.outputs).pipe(
                    tap((currentOutputs: readonly DfOutputComponent[]) => {
                        this.handleRemovedOutputs(currentOutputs);
                        this.applyOutputsConnectionLabel();
                    }),
                ),
            );
        });
    }

    /**
     * Processes removed inputs
     */
    private handleRemovedInputs(currentArray: readonly DfInputComponent[]): void {
        const removedOutputs = this.previousInputs.filter(
            (prev) => !currentArray.some((curr) => curr === prev),
        );

        if (removedOutputs.length > 0) {
            removedOutputs.forEach((output: DfInputComponent) => {
                this.connectorDeleted.emit(output.data.connectorId);
            });
        }

        this.previousInputs = [...currentArray];
    }

    /**
     * Processes removed outputs
     */
    private handleRemovedOutputs(currentArray: readonly DfOutputComponent[]): void {
        const removedOutputs = this.previousOutputs.filter(
            (prev) => !currentArray.some((curr) => curr === prev),
        );

        if (removedOutputs.length > 0) {
            removedOutputs.forEach((output: DfOutputComponent) => {
                this.connectorDeleted.emit(output.data.connectorId);
            });
        }

        this.previousOutputs = [...currentArray];
    }

    private applyOutputsConnectionLabel(): void {
        const connectionLabel = this.value.data.connectionLabel;

        if (!connectionLabel) {
            return;
        }

        this.innerComponent.outputs().forEach((output: DfOutputComponent) => {
            output.setConnectionLabel(connectionLabel);
        });
    }

    private observeNodeSize(): void {
        if (typeof ResizeObserver !== 'function') {
            return;
        }

        this.resizeObserver = new ResizeObserver(() => {
            this.saveInnerNodeSize();
            this.syncWorkspaceGeometry();
            this.refreshRenderedGeometry(false);
        });
        this.resizeObserver.observe(this.nodeElementRef().nativeElement);
    }

    private refreshRenderedGeometry(dynamic: boolean): void {
        this.applyPositionToStyle(this.getCenteredPosition(), dynamic);
        this.updateConnectorsCoordinates();
    }

    private syncWorkspaceGeometry(): void {
        const halfOfNodeWidth = this.nodeWidth / 2;
        const halfOfNodeHeight = this.nodeHeight / 2;

        this.panZoomService.upsertNodeBounds(this.value.id, {
            minX: this.value.position.x - halfOfNodeWidth,
            minY: this.value.position.y - halfOfNodeHeight,
            maxX: this.value.position.x + halfOfNodeWidth,
            maxY: this.value.position.y + halfOfNodeHeight,
        });
    }
}
