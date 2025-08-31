import {AsyncPipe, CommonModule} from '@angular/common';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import type {
    DfDataConnection,
    DfDataModel,
    DfDataNode,
    DfEvent,
} from '@ng-draw-flow/core';
import {
    DfArrowhead,
    DfConnectionPoint,
    DfConnectionType,
    dfCycleDetectionValidator,
    dfIsolatedNodesValidator,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiButton} from '@taiga-ui/core';
import {MarkdownModule} from 'ngx-markdown';
import {BehaviorSubject} from 'rxjs';

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
        }),
    ],
})
export default class EditorComponent implements OnInit {
    @ViewChild(NgDrawFlowComponent)
    public editor?: NgDrawFlowComponent;

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
