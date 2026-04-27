import {signal} from '@angular/core';

import {INITIAL_COORDINATES} from '../../consts';
import {
    type DfDragDrop,
    type DfDragDropDistance,
    DfDragDropStage,
} from '../../directives';
import {type DfDataNode, type DfPoint} from '../../ng-draw-flow.interfaces';
import {type NgDrawFlowStoreService} from '../../services/ng-draw-flow-store.service';
import {type ConnectionsService} from '../connections/connections.service';
import {type PanZoomService} from '../pan-zoom/pan-zoom.service';

export interface DfNodeInteractionControllerOptions {
    readonly connectionsService: ConnectionsService;
    readonly deletable: boolean;
    readonly draggable: boolean;
    readonly getCenteredPosition: (node: DfDataNode) => DfPoint;
    readonly getNode: () => DfDataNode;
    readonly isStartNode: () => boolean;
    readonly nodeDragThreshold: number;
    readonly panZoomService: PanZoomService;
    readonly store: NgDrawFlowStoreService;
    readonly applyPositionToStyle: (position: DfPoint, dynamic: boolean) => void;
    readonly clampPosition: (position: DfPoint) => DfPoint;
    readonly emitNodeDeleted: () => void;
    readonly emitNodeMoved: (node: DfDataNode) => void;
    readonly emitNodeSelected: (node: DfDataNode) => void;
    readonly recalculateConnectorsPosition: (
        distance: DfDragDropDistance,
        zoom: number,
    ) => void;
    readonly refreshRenderedGeometry: (dynamic: boolean) => void;
    readonly syncWorkspaceGeometry: () => void;
}

function createInitialCoordinates(): DfPoint {
    return {...INITIAL_COORDINATES};
}

export class NodeInteractionController {
    private readonly cursorSignal = signal<'grabbing' | 'initial'>('initial');
    private readonly selectedSignal = signal(false);

    private accumulatedDelta = createInitialCoordinates();
    private moved = false;

    public readonly cursor = this.cursorSignal.asReadonly();
    public readonly selected = this.selectedSignal.asReadonly();

    constructor(private readonly options: DfNodeInteractionControllerOptions) {}

    public handleKeyboardEvent(event: KeyboardEvent): void {
        if (
            !this.selectedSignal() ||
            !this.options.deletable ||
            this.options.isStartNode()
        ) {
            return;
        }

        const node = this.options.getNode();

        event.preventDefault();

        this.options.store.clearSelectedNode(node.id);
        this.options.emitNodeDeleted();
    }

    public setSelected(selected: boolean): void {
        const node = this.options.getNode();

        this.selectedSignal.set(selected);

        if (selected) {
            this.options.connectionsService.highlightConnectionsForNode(node.id);
            this.options.store.emitNodeSelected(node);
            this.options.emitNodeSelected(node);
        } else {
            this.options.connectionsService.highlightConnectionsForNode(null);
            this.options.store.clearSelectedNode(node.id);
        }
    }

    public handleDrag(event: DfDragDrop): void {
        if (this.options.isStartNode() || !this.options.draggable) {
            return;
        }

        if (event.stage === DfDragDropStage.Move) {
            this.handleDragMove(event.distance);
        } else {
            this.handleDragEnd();
        }
    }

    public clearHighlightedConnectionsFor(nodeId: string): void {
        if (this.options.connectionsService.selectedNodeId() === nodeId) {
            this.options.connectionsService.highlightConnectionsForNode(null);
        }
    }

    private handleDragMove(distance: DfDragDropDistance): void {
        const node = this.options.getNode();
        const {zoom} = this.options.panZoomService.snapshot();

        if (distance.deltaX || distance.deltaY) {
            this.moved = true;
        }

        this.cursorSignal.set('grabbing');
        this.options.panZoomService.setDisabled(true);

        this.accumulatedDelta.x += distance.deltaX / zoom;
        this.accumulatedDelta.y += distance.deltaY / zoom;

        const applyX =
            Math.abs(this.accumulatedDelta.x) >= this.options.nodeDragThreshold;
        const applyY =
            Math.abs(this.accumulatedDelta.y) >= this.options.nodeDragThreshold;

        if (!applyX && !applyY) {
            return;
        }

        const previousPosition = {...node.position};
        const requestedDeltaX = applyX ? this.accumulatedDelta.x : 0;
        const requestedDeltaY = applyY ? this.accumulatedDelta.y : 0;
        const unclampedPosition = {
            x: node.position.x + requestedDeltaX,
            y: node.position.y + requestedDeltaY,
        };

        node.position = this.options.clampPosition(unclampedPosition);
        const appliedDeltaX = node.position.x - previousPosition.x;
        const appliedDeltaY = node.position.y - previousPosition.y;

        this.options.syncWorkspaceGeometry();
        this.options.applyPositionToStyle(this.options.getCenteredPosition(node), true);
        this.options.recalculateConnectorsPosition(
            {
                deltaX: appliedDeltaX * zoom,
                deltaY: appliedDeltaY * zoom,
            },
            zoom,
        );

        if (applyX) {
            this.accumulatedDelta.x = 0;
        }

        if (applyY) {
            this.accumulatedDelta.y = 0;
        }
    }

    private handleDragEnd(): void {
        this.cursorSignal.set('initial');

        if (this.moved) {
            this.options.emitNodeMoved(this.options.getNode());
            this.options.refreshRenderedGeometry(false);
        }

        this.accumulatedDelta = createInitialCoordinates();
        this.moved = false;
        this.options.panZoomService.setDisabled(false);
    }
}
