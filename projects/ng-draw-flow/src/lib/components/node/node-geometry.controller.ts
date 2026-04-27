import {
    type DfDataInitialNode,
    type DfDataNode,
    type DfPoint,
} from '../../ng-draw-flow.interfaces';
import {getViewportZeroPoint} from '../pan-zoom/pan-zoom.camera.math';
import {type DfPanZoomOptions} from '../pan-zoom/pan-zoom.options';
import {type PanZoomService} from '../pan-zoom/pan-zoom.service';

export interface DfNodeGeometryControllerOptions {
    readonly drawFlowElement: HTMLElement;
    readonly panZoomOptions: DfPanZoomOptions;
    readonly panZoomService: PanZoomService;
}

export class NodeGeometryController {
    private nodeWidth = 0;
    private nodeHeight = 0;
    private resizeObserver: ResizeObserver | null = null;

    constructor(private readonly options: DfNodeGeometryControllerOptions) {}

    public resolveNode(node: DfDataInitialNode | DfDataNode): DfDataNode {
        if (this.hasPosition(node)) {
            return node;
        }

        return {
            ...node,
            position: this.getCenterOfViewport(),
        };
    }

    public resolveUpdatedNode(
        node: DfDataInitialNode | DfDataNode,
        currentNode: DfDataNode,
    ): DfDataNode {
        if (this.hasPosition(node)) {
            return node;
        }

        if (node.id === currentNode.id) {
            return {
                ...node,
                position: currentNode.position,
            };
        }

        return this.resolveNode(node);
    }

    public measureContent(nativeElement: HTMLElement | null): void {
        if (!nativeElement) {
            return;
        }

        this.nodeWidth = nativeElement.offsetWidth;
        this.nodeHeight = nativeElement.offsetHeight;
    }

    public getCenteredPosition(node: DfDataNode): DfPoint {
        const halfOfNodeWidth = this.nodeWidth / 2;
        const halfOfNodeHeight = this.nodeHeight / 2;

        return {
            x: node.position.x - halfOfNodeWidth,
            y: node.position.y - halfOfNodeHeight,
        };
    }

    public applyPositionToStyle(
        nativeElement: HTMLElement,
        position: DfPoint,
        dynamic: boolean,
    ): void {
        nativeElement.style.transform = dynamic
            ? `translate3D(${position.x}px, ${position.y}px, 0)`
            : `translate(${position.x}px, ${position.y}px)`;
    }

    public syncWorkspaceGeometry(node: DfDataNode): void {
        const halfOfNodeWidth = this.nodeWidth / 2;
        const halfOfNodeHeight = this.nodeHeight / 2;

        this.options.panZoomService.upsertNodeBounds(node.id, {
            minX: node.position.x - halfOfNodeWidth,
            minY: node.position.y - halfOfNodeHeight,
            maxX: node.position.x + halfOfNodeWidth,
            maxY: node.position.y + halfOfNodeHeight,
        });
    }

    public removeWorkspaceGeometry(nodeId: string): void {
        this.options.panZoomService.removeNodeBounds(nodeId);
    }

    public observeNodeSize(nativeElement: HTMLElement, onResize: () => void): void {
        if (typeof ResizeObserver !== 'function') {
            return;
        }

        this.resizeObserver = new ResizeObserver(onResize);
        this.resizeObserver.observe(nativeElement);
    }

    public disconnect(): void {
        this.resizeObserver?.disconnect();
        this.resizeObserver = null;
    }

    public getCenterOfViewport(): DfPoint {
        const {x: cameraX, y: cameraY, zoom} = this.options.panZoomService.snapshot();
        const viewportWidth = this.options.drawFlowElement.offsetWidth;
        const viewportHeight = this.options.drawFlowElement.offsetHeight;
        const viewportCenterX = viewportWidth / 2;
        const viewportCenterY = viewportHeight / 2;
        const zeroPoint = getViewportZeroPoint(
            {width: viewportWidth, height: viewportHeight},
            {
                leftPosition: this.options.panZoomOptions.leftPosition,
                topPosition: this.options.panZoomOptions.topPosition,
            },
        );

        return {
            x: (viewportCenterX - zeroPoint.x - cameraX) / zoom,
            y: (viewportCenterY - zeroPoint.y - cameraY) / zoom,
        };
    }

    public clampPositionToPanBounds(position: DfPoint): DfPoint {
        return position;
    }

    private hasPosition(node: DfDataInitialNode | DfDataNode): node is DfDataNode {
        const position = (node as DfDataNode).position;

        return !!position && Number.isFinite(position.x) && Number.isFinite(position.y);
    }
}
