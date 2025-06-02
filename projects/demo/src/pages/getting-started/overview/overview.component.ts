import {CommonModule} from '@angular/common';
import type {AfterViewInit, OnDestroy, OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {
    DfDataConnection,
    DfDataModel,
    DfDataNode,
    DfEvent,
} from '@ng-draw-flow/core';
import {
    DfConnectionPoint,
    dfCycleDetectionValidator,
    dfIsolatedNodesValidator,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';
import {TuiButton} from '@taiga-ui/core';
import type {Subscription} from 'rxjs';
import {BehaviorSubject} from 'rxjs';

import {LogoNodeComponent} from './logo-node/logo-node.component';
import {OverviewNodeComponent} from './overview-node/overview-node.component';
import {TitleNodeComponent} from './title-node/title-node.component';

@Component({
    standalone: true,
    selector: 'app-overview',
    imports: [
        CommonModule,
        NgDrawFlowComponent,
        ReactiveFormsModule,
        TitleNodeComponent,
        TuiButton,
    ],
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        provideNgDrawFlowConfigs({
            nodes: {
                overviewNode: OverviewNodeComponent,
                logoNode: LogoNodeComponent,
            },
        }),
    ],
})
export default class OverviewComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(NgDrawFlowComponent)
    public editor?: NgDrawFlowComponent;

    public data: DfDataModel = {
        nodes: new Map()
            .set('node-1', {
                id: 'node-1',
                data: {
                    type: 'overviewNode',
                    title: 'API first.',
                    subTitle: 'Configureable as you wish.',
                },
                position: {x: -200, y: -150},
                startNode: true,
            })
            .set('node-2', {
                id: 'node-2',
                data: {
                    type: 'overviewNode',
                    title: 'Easy to Use.',
                    subTitle: 'But powerful & performant.',
                },
                position: {x: -300, y: -50},
                startNode: true,
            })
            .set('node-3', {
                id: 'node-3',
                data: {
                    type: 'overviewNode',
                    title: 'Beautiful.',
                    subTitle: 'Bring your theme or Taiga UI.',
                },
                position: {x: -300, y: 50},
                startNode: true,
            })
            .set('node-4', {
                id: 'node-4',
                data: {
                    type: 'overviewNode',
                    title: 'Editable.',
                    subTitle: 'Ready to build editors.',
                },
                position: {x: -200, y: 150},
                startNode: true,
            })
            .set('node-10', {
                id: 'node-10',
                data: {
                    type: 'logoNode',
                    title: 'NgDrawFlow.',
                    subTitle: 'Taiga',
                },
                position: {x: 250, y: 0},
            }),
        connections: [
            {
                source: {
                    nodeId: 'node-1',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-1-output-1',
                },
                target: {
                    nodeId: 'node-10',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-10-input-1',
                },
            },
            {
                source: {
                    nodeId: 'node-2',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-2-output-1',
                },
                target: {
                    nodeId: 'node-10',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-10-input-1',
                },
            },
            {
                source: {
                    nodeId: 'node-3',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-3-output-1',
                },
                target: {
                    nodeId: 'node-10',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-10-input-1',
                },
            },
            {
                source: {
                    nodeId: 'node-4',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-4-output-1',
                },
                target: {
                    nodeId: 'node-10',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-10-input-1',
                },
            },
        ],
    };

    public currentScale$: BehaviorSubject<number> = new BehaviorSubject<number>(100);
    public fullscreen$ = new BehaviorSubject<boolean>(false);
    public counter = 0;
    public form = new FormControl<DfDataModel>(this.data, [
        dfCycleDetectionValidator(),
        dfIsolatedNodesValidator(),
    ]);

    public ngOnInit(): void {
        this.form.statusChanges.subscribe((v) => {
            console.warn(v, 'onStatusChange');
        });

        this.form.valueChanges.subscribe((v) => {
            console.warn(v, 'onValueChange');
        });
    }

    public onScaleChange(zoomLevel: number): void {
        this.currentScale$.next(zoomLevel);
    }

    public onConnectionCreated(event: DfEvent<DfDataConnection>): void {
        console.warn(event, 'onConnectionCreated');
    }

    public onConnectionDeleted(event: DfEvent<DfDataConnection>): void {
        console.warn(event, 'onConnectionDeleted');
    }

    public onConnectionSelected(event: DfDataConnection): void {
        console.warn(event, 'onConnectionSelected');
    }

    public onNodeMoved(event: DfEvent<DfDataNode>): void {
        console.warn(event, 'onNodeMoved');
    }

    public onNodeSelected(event: DfDataNode): void {
        console.warn(event, 'onNodeSelected');
    }

    public onNodeDeleted(event: DfEvent<DfDataNode>): void {
        console.warn(event, 'onNodeDeleted');
    }

    public toggleFullscreen(): void {
        this.fullscreen$.next(!this.fullscreen$.value);
        this.editor?.resetPosition();
    }

    public addNodeToDrawFlow(): void {
        const id = `new-node-id-${this.counter}`;

        this.data.nodes.set(id, {
            id,
            data: {
                type: 'overviewNode',
                title: 'A new node!',
                subTitle:
                    'Connect me to the graph and learn how to configure me in the docs.',
            },
        });
        this.form.setValue(this.data);
        this.counter++;
    }

    private zoomSubscription?: Subscription;

    public ngAfterViewInit(): void {
        if (this.editor) {
            // Base zoom level is 1.0 for a standard laptop width (around 1366px)
            /* working solution, uncomment to test
            const standardWidth = 1366;
            const currentWidth = window.innerWidth;
            const zoomFactor = Math.max(0.3, Math.min(1.5, currentWidth / standardWidth));
            this.editor.setPanZoom(zoomFactor);
            this.currentScale$.next(zoomFactor * 100);
            */

            /* working solution, uncomment to test
           const zoomFactor = this.editor.setZoomBasedOnScreenWidth(1366);
            this.currentScale$.next(zoomFactor * 100);
           */

            /* working solution, uncomment to test
            const zoomFactor = this.editor.setZoomBasedOnScreenHeight(1366);
            this.currentScale$.next(zoomFactor * 100);
            */

            // Subscribe to the window resize events and update currentScale
            this.zoomSubscription = this.editor
                .zoomBasedOnWindowResize(1366, 800, false)
                .subscribe((zoomFactor) => {
                    // Update the scale subject for UI
                    this.currentScale$.next(zoomFactor * 100);
                });
        }
    }

    public ngOnDestroy(): void {
        if (this.zoomSubscription) {
            this.zoomSubscription.unsubscribe();
        }
    }
}
