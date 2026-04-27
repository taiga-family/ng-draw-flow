import {
    type DestroyRef,
    type EnvironmentInjector,
    runInInjectionContext,
} from '@angular/core';
import {takeUntilDestroyed, toObservable} from '@angular/core/rxjs-interop';
import {map, merge, type Observable, type Subscription, tap} from 'rxjs';

import {type DfDragDropDistance} from '../../directives';
import {createConnectorHash} from '../../helpers';
import {
    DfConnectionPoint,
    type DfDataNode,
    type DfPoint,
} from '../../ng-draw-flow.interfaces';
import {type CoordinatesService} from '../../services/coordinates.service';
import {type DfInputComponent, type DfOutputComponent} from '../connectors';
import {type DfNodeContentRenderer} from './node-content.renderer';

export interface DfNodeConnectorsControllerOptions {
    readonly coordinatesService: CoordinatesService;
    readonly destroyRef: DestroyRef;
    readonly environmentInjector: EnvironmentInjector;
    readonly getCenteredPosition: (node: DfDataNode) => DfPoint;
    readonly getNode: () => DfDataNode;
    readonly getNodeContentRenderer: () => DfNodeContentRenderer;
    readonly onConnectorDeleted: (connectorId: string) => void;
}

export class NodeConnectorsController {
    private previousInputs: DfInputComponent[] = [];
    private previousOutputs: DfOutputComponent[] = [];
    private connectorUpdatesSubscription: Subscription | null = null;

    constructor(private readonly options: DfNodeConnectorsControllerOptions) {}

    public updateCoordinates(): void {
        const node = this.options.getNode();
        const nodeContentRenderer = this.options.getNodeContentRenderer();
        const centeredCoordinates = this.options.getCenteredPosition(node);

        nodeContentRenderer.inputConnectors().forEach((input: DfInputComponent) => {
            this.updateConnectorCoordinates(
                centeredCoordinates,
                node.id,
                input,
                DfConnectionPoint.Input,
            );
        });

        nodeContentRenderer.outputConnectors().forEach((output: DfOutputComponent) => {
            this.updateConnectorCoordinates(
                centeredCoordinates,
                node.id,
                output,
                DfConnectionPoint.Output,
            );
        });
    }

    public recalculatePositions(distance: DfDragDropDistance, zoom: number): void {
        const nodeContentRenderer = this.options.getNodeContentRenderer();
        const currentMoveDistance = {
            deltaX: distance.deltaX / zoom,
            deltaY: distance.deltaY / zoom,
        };

        nodeContentRenderer.inputConnectors().forEach((input: DfInputComponent) => {
            this.recalculateConnectorPositionFromLast(
                currentMoveDistance,
                input,
                DfConnectionPoint.Input,
            );
        });

        nodeContentRenderer.outputConnectors().forEach((output: DfOutputComponent) => {
            this.recalculateConnectorPositionFromLast(
                currentMoveDistance,
                output,
                DfConnectionPoint.Output,
            );
        });
    }

    public watch(): void {
        const nodeContentRenderer = this.options.getNodeContentRenderer();

        this.connectorUpdatesSubscription?.unsubscribe();
        this.previousOutputs = [...nodeContentRenderer.outputConnectors()];
        this.previousInputs = [...nodeContentRenderer.inputConnectors()];

        const connectorsUpdates$ = this.collectConnectorUpdateSources(
            nodeContentRenderer,
            () => this.applyOutputsConnectionLabel(),
        );

        if (!connectorsUpdates$.length) {
            return;
        }

        this.connectorUpdatesSubscription = merge(...connectorsUpdates$)
            .pipe(takeUntilDestroyed(this.options.destroyRef))
            .subscribe(() => this.updateCoordinates());
    }

    public disconnect(): void {
        this.connectorUpdatesSubscription?.unsubscribe();
        this.connectorUpdatesSubscription = null;
    }

    public applyOutputsConnectionLabel(): void {
        const node = this.options.getNode();
        const connectionLabel = node.data.connectionLabel;

        if (!connectionLabel) {
            return;
        }

        this.options.getNodeContentRenderer().applyConnectionLabel(connectionLabel);
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

        this.options.coordinatesService.addConnectionPoint(
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

        this.options.coordinatesService.addConnectionPoint(
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

    private collectConnectorUpdateSources(
        nodeContentRenderer: DfNodeContentRenderer,
        onOutputsChanged: () => void,
    ): Array<Observable<void>> {
        const sources: Array<Observable<void>> = [];

        this.addContentRendererUpdates(sources, nodeContentRenderer);
        this.addInputsUpdates(sources, nodeContentRenderer);
        this.addOutputsUpdates(sources, nodeContentRenderer, onOutputsChanged);

        return sources;
    }

    private addContentRendererUpdates(
        sources: Array<Observable<void>>,
        nodeContentRenderer: DfNodeContentRenderer,
    ): void {
        sources.push(nodeContentRenderer.connectorUpdates$);
    }

    private addInputsUpdates(
        sources: Array<Observable<void>>,
        nodeContentRenderer: DfNodeContentRenderer,
    ): void {
        runInInjectionContext(this.options.environmentInjector, () => {
            sources.push(
                toObservable(nodeContentRenderer.inputConnectors).pipe(
                    tap((currentInputs: readonly DfInputComponent[]) => {
                        this.handleRemovedInputs(currentInputs);
                    }),
                    map(() => undefined),
                ),
            );
        });
    }

    private addOutputsUpdates(
        sources: Array<Observable<void>>,
        nodeContentRenderer: DfNodeContentRenderer,
        onOutputsChanged: () => void,
    ): void {
        runInInjectionContext(this.options.environmentInjector, () => {
            sources.push(
                toObservable(nodeContentRenderer.outputConnectors).pipe(
                    tap((currentOutputs: readonly DfOutputComponent[]) => {
                        this.handleRemovedOutputs(currentOutputs);
                        onOutputsChanged();
                    }),
                    map(() => undefined),
                ),
            );
        });
    }

    private handleRemovedInputs(currentArray: readonly DfInputComponent[]): void {
        const removedInputs = this.previousInputs.filter(
            (prev) => !currentArray.some((curr) => curr === prev),
        );

        if (removedInputs.length > 0) {
            removedInputs.forEach((input: DfInputComponent) => {
                this.options.onConnectorDeleted(input.data.connectorId);
            });
        }

        this.previousInputs = [...currentArray];
    }

    private handleRemovedOutputs(currentArray: readonly DfOutputComponent[]): void {
        const removedOutputs = this.previousOutputs.filter(
            (prev) => !currentArray.some((curr) => curr === prev),
        );

        if (removedOutputs.length > 0) {
            removedOutputs.forEach((output: DfOutputComponent) => {
                this.options.onConnectorDeleted(output.data.connectorId);
            });
        }

        this.previousOutputs = [...currentArray];
    }
}
