import {AsyncPipe, CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    type OnInit,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    DF_PAN_ZOOM_OPTIONS,
    DfArrowhead,
    DfConnectionPoint,
    DfConnectionType,
    dfCycleDetectionValidator,
    type DfDataConnection,
    type DfDataModel,
    type DfDataNode,
    type DfEvent,
    dfIsolatedNodesValidator,
    type DfPanZoomOptions,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
    NgDrawFlowStoreService,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';
import {TuiAddonDoc, type TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiButton, TuiLabel, TuiTextfield, TuiTextfieldComponent} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';
import {MarkdownModule} from 'ngx-markdown';
import {BehaviorSubject, distinctUntilChanged} from 'rxjs';

import {SimpleNodeComponent} from '../../../app/modules/nodes';

@Component({
    standalone: true,
    selector: 'editor',
    imports: [
        AsyncPipe,
        CommonModule,
        MarkdownModule,
        NgDrawFlowComponent,
        ReactiveFormsModule,
        TuiAddonDoc,
        TuiButton,
        TuiInputNumber,
        TuiLabel,
        TuiTextfield,
        TuiTextfieldComponent,
    ],
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        dfPanZoomOptionsProvider({
            leftPosition: 50,
        }),
        provideNgDrawFlowConfigs({
            connection: {
                type: DfConnectionType.SmoothStep,
                arrowhead: {type: DfArrowhead.Arrow},
                curvature: 10,
            },
            nodes: {
                simpleNode: SimpleNodeComponent,
            },
            options: {
                nodesDraggable: true,
                nodesDeletable: true,
                connectionsDeletable: true,
                connectionsCreatable: true,
            },
        }),
    ],
})
export default class EditorComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef);
    public readonly panZoomOptions: DfPanZoomOptions =
        inject<DfPanZoomOptions>(DF_PAN_ZOOM_OPTIONS);

    public readonly drawFlowStore = inject(NgDrawFlowStoreService);

    public readonly customNodeExample: Record<string, TuiRawLoaderContent> = {
        Typescript: import('./examples/editor.component.md?raw'),
        Styles: import('./editor.component.less?raw'),
        Template: import('./examples/editor.template.md?raw'),
    };

    public data: DfDataModel = {
        nodes: [
            {
                id: 'node-1',
                data: {type: 'simpleNode', text: 'This base node'},
                position: {x: 0, y: 0},
                startNode: true,
            },
            {
                id: 'node-2',
                data: {type: 'simpleNode', text: 'This child node 1'},
                position: {x: 250, y: 50},
            },
            {
                id: 'node-3',
                data: {type: 'simpleNode', text: 'This child node 2'},
                position: {x: 250, y: -50},
            },
            {
                id: 'node-4',
                data: {type: 'simpleNode', text: 'This child node 3'},
                position: {x: 500, y: 0},
                endNode: true,
            },
        ],
        connections: [
            {
                source: {
                    nodeId: 'node-1',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-1-output-1',
                },
                target: {
                    nodeId: 'node-2',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-2-input-1',
                },
            },
            {
                source: {
                    nodeId: 'node-1',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-1-output-1',
                },
                target: {
                    nodeId: 'node-3',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-3-input-1',
                },
            },
            {
                source: {
                    nodeId: 'node-2',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-2-output-1',
                },
                target: {
                    nodeId: 'node-4',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-4-input-1',
                },
            },
            {
                source: {
                    nodeId: 'node-3',
                    connectorType: DfConnectionPoint.Output,
                    connectorId: 'node-3-output-1',
                },
                target: {
                    nodeId: 'node-4',
                    connectorType: DfConnectionPoint.Input,
                    connectorId: 'node-4-input-1',
                },
            },
        ],
    };

    public readonly scaleControl = new FormControl<number>(1, {nonNullable: true});
    public readonly fullscreen$ = new BehaviorSubject<boolean>(false);
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

        this.scaleControl.valueChanges
            .pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
            .subscribe((value: number) => {
                if (!Number.isFinite(value)) {
                    return;
                }

                this.drawFlowStore.setScale(value);
            });

        this.drawFlowStore.connectionCreated$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((data: DfEvent<DfDataConnection>) => {
                console.warn(data, 'drawFlowStore connectionCreated');
            });

        this.drawFlowStore.connectionDeleted$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((data: DfEvent<DfDataConnection>) => {
                console.warn(data, 'drawFlowStore connectionDeleted');
            });

        this.drawFlowStore.connectionSelected$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((data: DfDataConnection) => {
                console.warn(data, 'drawFlowStore connectionSelected');
            });

        this.drawFlowStore.nodeDeleted$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((data: DfEvent<DfDataNode>) => {
                console.warn(data, 'drawFlowStore nodeDeleted');
            });

        this.drawFlowStore.nodeMoved$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((data: DfEvent<DfDataNode>) => {
                console.warn(data, 'drawFlowStore nodeMoved');
            });

        this.drawFlowStore.nodeSelected$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((data: DfDataNode) => {
                console.warn(data, 'drawFlowStore nodeSelected');
            });
    }

    public onScaleChange(zoomLevel: number): void {
        this.scaleControl.setValue(zoomLevel / 100, {emitEvent: false});
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
        this.drawFlowStore.resetPosition();
    }

    public addNodeToDrawFlow(): void {
        const id = `new-node-${this.counter}`;

        this.data.nodes.push({
            id,
            data: {
                type: 'simpleNode',
                text: `created node ${this.counter + 1}`,
            },
        });

        this.form.setValue(this.data);
        this.counter++;
    }
}
