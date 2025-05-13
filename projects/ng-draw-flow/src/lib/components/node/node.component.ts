import type {AfterViewInit, ComponentRef, ElementRef} from '@angular/core';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    EventEmitter,
    inject,
    Input,
    Output,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {auditTime, EMPTY, merge} from 'rxjs';

import type {DfDragDrop, DfDragDropDistance} from '../../directives/drag-drop';
import {DfDragDropStage, DragDropDirective} from '../../directives/drag-drop';
import {SelectableElementDirective} from '../../directives/selectable-element';
import {createConnectorHash, INITIAL_COORDINATES} from '../../helpers';
import {DRAW_FLOW_OPTIONS} from '../../ng-draw-flow.configs';
import type {
    DfDataInitialNode,
    DfDataNode,
    DfOptions,
    DfPoint,
} from '../../ng-draw-flow.interfaces';
import {DfConnectionPoint} from '../../ng-draw-flow.interfaces';
import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
import type {DrawFlowBaseNode} from '../../ng-draw-flow-node.base';
import {CoordinatesService} from '../../services/coordinates.service';
import type {DfInputComponent, DfOutputComponent} from '../connectors';
import {DF_PAN_ZOOM_OPTIONS} from '../pan-zoom/pan-zoom.options';
import {PanZoomService} from '../pan-zoom/pan-zoom.service';

@Component({
    standalone: true,
    selector: 'df-node',
    imports: [DragDropDirective, SelectableElementDirective],
    templateUrl: './node.component.html',
    styleUrls: ['./node.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(document:keydown.delete)': 'this.handleKeyboardEvent($event)',
        '(document:keydown.backspace)': 'this.handleKeyboardEvent($event)',
    },
})
export class NodeComponent implements AfterViewInit {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);
    private readonly panZoomService = inject(PanZoomService);
    private readonly coordinatesService = inject(CoordinatesService);
    private readonly drawFlowComponents = inject<DfOptions>(DRAW_FLOW_OPTIONS).nodes;
    private readonly nodeDragThreshold =
        inject<DfOptions>(DRAW_FLOW_OPTIONS).options.nodeDragThreshold;

    private readonly drawFlowElement = inject<HTMLElement>(DRAW_FLOW_ROOT_ELEMENT);
    private readonly panZoomOptions = inject(DF_PAN_ZOOM_OPTIONS);

    private innerComponent!: DrawFlowBaseNode;
    private nodeContentComponentRef!: ComponentRef<DrawFlowBaseNode>;
    private nodeWidth!: number;
    private nodeHeight!: number;
    private selected = false;
    private value!: any;
    private accumulatedDelta: DfPoint = INITIAL_COORDINATES;

    @ViewChild('nodeElement')
    private readonly nodeElementRef!: ElementRef<HTMLElement>;

    @ViewChild('container', {read: ViewContainerRef})
    private readonly containerRef!: ViewContainerRef;

    @Input()
    public node!: DfDataInitialNode | DfDataNode;

    @Output()
    protected readonly nodeMoved = new EventEmitter<DfDataNode>();

    @Output()
    protected readonly nodeDeleted = new EventEmitter<void>();

    @Output()
    protected readonly nodeSelected = new EventEmitter<DfDataNode>();

    protected cursor: 'grabbing' | 'initial' = 'initial';

    protected handleKeyboardEvent(event: KeyboardEvent): void {
        if (this.selected && !this.node.startNode) {
            event.preventDefault();

            this.nodeDeleted.emit();
        }
    }

    public ngAfterViewInit(): void {
        this.createNodeContentComponent(this.node);
        this.subscribeToConnectorsChanges();
        this.saveInnerNodeSize();
        this.fillValue();
        this.setInitialPosition();
        this.updateConnectorsCoordinates();
    }

    protected createNodeContentComponent(node: DfDataInitialNode | DfDataNode): void {
        const {id: nodeId, startNode, endNode, data} = node;
        const nodeType = data.type;

        this.containerRef.clear();
        this.nodeContentComponentRef = this.containerRef.createComponent(
            this.drawFlowComponents[nodeType],
        );

        this.innerComponent = this.nodeContentComponentRef.instance;

        this.innerComponent.nodeId = nodeId;
        this.innerComponent.startNode = startNode;
        this.innerComponent.endNode = endNode;
        this.innerComponent.model = data;

        this.cdr.detectChanges();
    }

    protected onSelectedChanged(selected: boolean): void {
        this.selected = selected;
        this.innerComponent.selected = selected;

        if (selected) {
            this.nodeSelected.emit(this.value);
        }
    }

    protected onDrag(event: DfDragDrop): void {
        if (this.node.startNode) {
            return;
        }

        if (event.stage === DfDragDropStage.Move) {
            this.onDragMove(event.distance);
        } else {
            this.onDragEnd();
        }
    }

    private onDragMove(distance: DfDragDropDistance): void {
        const {zoom} = this.panZoomService.panzoomModel;

        this.cursor = 'grabbing';

        // Accumulate offset
        this.accumulatedDelta.x += distance.deltaX / zoom;
        this.accumulatedDelta.y += distance.deltaY / zoom;

        const applyX = Math.abs(this.accumulatedDelta.x) >= this.nodeDragThreshold;
        const applyY = Math.abs(this.accumulatedDelta.y) >= this.nodeDragThreshold;

        if (applyX || applyY) {
            // Apply accumulated offset
            this.value.position.x += applyX ? this.accumulatedDelta.x : 0;
            this.value.position.y += applyY ? this.accumulatedDelta.y : 0;

            const centeredPosition = this.getCenteredPosition();

            this.applyPositionToStyle(centeredPosition, true);
            this.recalculateConnectorsPosition({
                deltaX: applyX ? this.accumulatedDelta.x * zoom : 0,
                deltaY: applyY ? this.accumulatedDelta.y * zoom : 0,
            });

            // Reset only used directions
            if (applyX) {
                this.accumulatedDelta.x = 0;
            }

            if (applyY) {
                this.accumulatedDelta.y = 0;
            }
        }

        this.panZoomService.panzoomDisabled = true;
    }

    private onDragEnd(): void {
        this.cursor = 'initial';
        this.panZoomService.panzoomDisabled = false;
        this.nodeMoved.emit(this.value);
        this.applyPositionToStyle(this.getCenteredPosition(), false);

        this.accumulatedDelta = INITIAL_COORDINATES;
    }

    private fillValue(): void {
        if (!('position' in this.node)) {
            this.value = {
                ...this.node,
                position: this.getCenterOfViewport(),
            };
        } else {
            this.value = this.node;
        }
    }

    private saveInnerNodeSize(): void {
        const nativeElement = this.nodeContentComponentRef.location.nativeElement;

        this.nodeWidth = nativeElement.offsetWidth;
        this.nodeHeight = nativeElement.offsetHeight;
    }

    private updateConnectorsCoordinates(): void {
        const centeredCoordinates = this.getCenteredPosition();

        this.nodeContentComponentRef.instance.inputs?.forEach(
            (input: DfInputComponent) => {
                this.updateConnectorCoordinates(
                    centeredCoordinates,
                    this.value.id,
                    input,
                    DfConnectionPoint.Input,
                );
            },
        );

        this.nodeContentComponentRef.instance.outputs?.forEach(
            (output: DfOutputComponent) => {
                this.updateConnectorCoordinates(
                    centeredCoordinates,
                    this.value.id,
                    output,
                    DfConnectionPoint.Output,
                );
            },
        );
    }

    private recalculateConnectorsPosition(distance: DfDragDropDistance): void {
        const {zoom} = this.panZoomService.panzoomModel;
        const currentMoveDistance = {
            deltaX: distance.deltaX / zoom,
            deltaY: distance.deltaY / zoom,
        };

        this.nodeContentComponentRef.instance.inputs?.forEach(
            (input: DfInputComponent) => {
                this.recalculateConnectorPositionFromLast(
                    currentMoveDistance,
                    input,
                    DfConnectionPoint.Input,
                );
            },
        );

        this.nodeContentComponentRef.instance.outputs?.forEach(
            (output: DfOutputComponent) => {
                this.recalculateConnectorPositionFromLast(
                    currentMoveDistance,
                    output,
                    DfConnectionPoint.Output,
                );
            },
        );
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
        this.nodeElementRef.nativeElement.style.transform = dynamic
            ? `translate3D(${position.x}px, ${position.y}px, 0)`
            : `translate(${position.x}px, ${position.y}px)`;
    }

    private getCenteredPosition(): DfPoint {
        const {
            panSize,
            leftPosition: panZoomLeftPosition,
            topPosition: panZoomTopPosition,
        } = this.panZoomOptions;
        const halfOfNodeWidth = this.nodeWidth / 2;
        const halfOfNodeHeight = this.nodeHeight / 2;
        const halfOfPanSize = panSize / 2;

        const centeredPosition = {
            x: this.value.position.x + halfOfPanSize - halfOfNodeWidth,
            y: this.value.position.y + halfOfPanSize - halfOfNodeHeight,
        };

        if (panZoomTopPosition || panZoomTopPosition === 0) {
            centeredPosition.y += halfOfNodeHeight;
        }

        if (panZoomLeftPosition || panZoomLeftPosition === 0) {
            centeredPosition.x += halfOfNodeWidth;
        }

        return centeredPosition;
    }

    private subscribeToConnectorsChanges(): void {
        const changes$ = merge(
            this.innerComponent.connectorsUpdated ?? EMPTY,
            this.innerComponent.inputs?.changes ?? EMPTY,
            this.innerComponent.outputs?.changes ?? EMPTY,
        );

        changes$
            .pipe(auditTime(0), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.updateConnectorsCoordinates());
    }

    private getCenterOfViewport(): DfPoint {
        // Get the current scale of the pan
        const {x: panPositionX, y: panPositionY, zoom} = this.panZoomService.panzoomModel;
        const {
            panSize,
            leftPosition: panZoomLeftPosition,
            topPosition: panZoomTopPosition,
        } = this.panZoomOptions;
        const halfOfPanSize = panSize / 2;

        // Get current pan position
        const scaledPanPositionX = halfOfPanSize + (panPositionX * -1) / zoom;
        const scaledPanPositionY = halfOfPanSize + (panPositionY * -1) / zoom;

        // Calculating the centre of the visible part of the viewport relative to the whole board
        const position = {
            x: scaledPanPositionX - halfOfPanSize,
            y: scaledPanPositionY - halfOfPanSize,
        };

        if (panZoomLeftPosition) {
            position.x -=
                (this.drawFlowElement.offsetWidth / 2) * -1 +
                panZoomLeftPosition +
                this.nodeWidth / 2;
        }

        if (panZoomTopPosition) {
            position.y -=
                (this.drawFlowElement.offsetHeight / 2) * -1 +
                panZoomTopPosition +
                this.nodeHeight / 2;
        }

        return position;
    }

    private setInitialPosition(): void {
        const centeredPosition = this.getCenteredPosition();

        this.applyPositionToStyle(centeredPosition, false);
    }
}
