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
import {merge} from 'rxjs';

import type {DfDragDrop, DfDragDropDistance} from '../../directives/drag-drop';
import {DfDragDropStage, DragDropDirective} from '../../directives/drag-drop';
import {SelectableElementDirective} from '../../directives/selectable-element';
import {createConnectorHash} from '../../helpers';
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
    private readonly panZoomService = inject(PanZoomService);
    private readonly coordinatesService = inject(CoordinatesService);
    private readonly drawFlowComponents = inject<DfOptions>(DRAW_FLOW_OPTIONS).nodes;

    private readonly drawFlowElement = inject<HTMLElement>(DRAW_FLOW_ROOT_ELEMENT);
    private readonly panZoomOptions = inject(DF_PAN_ZOOM_OPTIONS);

    private readonly isDynamicComponentCreated = false;
    private nodeContentComponentRef!: ComponentRef<any>;
    private readonly destroyRef = inject(DestroyRef);
    private nodeWidth!: number;
    private nodeHeight!: number;
    private selected = false;
    private innerComponent!: DrawFlowBaseNode;
    private value!: any;

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
        if (this.isDynamicComponentCreated) {
            return;
        }

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

        this.value.position = this.calculatePosition(distance, zoom);
        const centeredPosition = this.getCenteredPosition();

        this.panZoomService.panzoomDisabled = true;
        this.applyPositionToStyle(this.nodeElementRef.nativeElement, centeredPosition);
        this.recalculateConnectorsPosition(distance);
    }

    private onDragEnd(): void {
        this.cursor = 'initial';
        this.panZoomService.panzoomDisabled = false;
        this.nodeMoved.emit(this.value);
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

    private applyPositionToStyle(element: HTMLElement, position: DfPoint): void {
        element.style.transform = `translate3D(${position.x}px, ${position.y}px, 0)`;
    }

    private getCenteredPosition(): DfPoint {
        const {
            panSize,
            leftPosition: panZoomLeftPosition,
            topPosition: panZoomTopPosition,
        } = this.panZoomOptions;

        const centeredPosition = {
            x: this.value.position.x + panSize / 2 - this.nodeWidth / 2,
            y: this.value.position.y + panSize / 2 - this.nodeHeight / 2,
        };

        if (panZoomTopPosition || panZoomTopPosition === 0) {
            centeredPosition.y += this.nodeHeight / 2;
        }

        if (panZoomLeftPosition || panZoomLeftPosition === 0) {
            centeredPosition.x += this.nodeWidth / 2;
        }

        return centeredPosition;
    }

    private subscribeToConnectorsChanges(): void {
        const connectorsUpdates$ = [];

        if (this.nodeContentComponentRef.instance?.connectorsUpdated) {
            connectorsUpdates$.push(
                this.nodeContentComponentRef.instance.connectorsUpdated,
            );
        }

        if (this.innerComponent.inputs?.changes) {
            connectorsUpdates$.push(this.innerComponent.inputs.changes);
        }

        if (this.innerComponent.outputs?.changes) {
            connectorsUpdates$.push(this.innerComponent.outputs.changes);
        }

        if (connectorsUpdates$.length > 0) {
            merge(...connectorsUpdates$)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe(() => {
                    this.updateConnectorsCoordinates();
                });
        }
    }

    private getCenterOfViewport(): DfPoint {
        // Get the current scale of the pan
        const {x: panPositionX, y: panPositionY, zoom} = this.panZoomService.panzoomModel;
        const {
            panSize,
            leftPosition: panZoomLeftPosition,
            topPosition: panZoomTopPosition,
        } = this.panZoomOptions;

        // Get current pan position
        const scaledPanPositionX = panSize / 2 + (panPositionX * -1) / zoom;
        const scaledPanPositionY = panSize / 2 + (panPositionY * -1) / zoom;

        // Calculating the centre of the visible part of the viewport relative to the whole board
        const position = {
            x: scaledPanPositionX - panSize / 2,
            y: scaledPanPositionY - panSize / 2,
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

    private calculatePosition(
        distance: DfDragDropDistance,
        zoom: number,
    ): DfPoint | null {
        if (!('position' in this.value)) {
            return null;
        }

        return {
            x: this.value.position.x + distance.deltaX / zoom,
            y: this.value.position.y + distance.deltaY / zoom,
        };
    }

    private setInitialPosition(): void {
        const centeredPosition = this.getCenteredPosition();

        this.applyPositionToStyle(this.nodeElementRef.nativeElement, centeredPosition);
    }
}
