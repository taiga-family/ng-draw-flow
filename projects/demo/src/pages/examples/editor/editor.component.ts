import {AsyncPipe, CommonModule} from '@angular/common';
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
    DfConnectionPoint,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
} from '@ng-draw-flow/core';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule} from '@taiga-ui/core';
import {MarkdownModule} from 'ngx-markdown';
import {BehaviorSubject} from 'rxjs';

@Component({
    standalone: true,
    selector: 'editor',
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        CommonModule,
        MarkdownModule,
        TuiButtonModule,
        TuiAddonDocModule,
        NgDrawFlowComponent,
    ],
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        dfPanZoomOptionsProvider({
            leftPosition: 150,
        }),
    ],
})
export default class EditorComponent {
    @ViewChild(NgDrawFlowComponent)
    public editor!: NgDrawFlowComponent;

    public readonly customNodeExample: TuiDocExample = {
        Typescript: import('./examples/editor.component.md?raw'),
        Styles: import('./editor.component.less?raw'),
        Template: import('./examples/editor.template.md?raw'),
    };

    public data: DfDataModel = {
        nodes: new Map()
            .set('node-1', {
                id: 'node-1',
                data: {type: 'simpleNode', text: 'This base node'},
                position: {x: 0, y: 0},
                startNode: true,
            })
            .set('node-2', {
                id: 'node-2',
                data: {type: 'simpleNode', text: 'This child node 1'},
                position: {x: 250, y: 50},
            })
            .set('node-3', {
                id: 'node-3',
                data: {type: 'simpleNode', text: 'This child node 2'},
                position: {x: 250, y: -50},
            })
            .set('node-4', {
                id: 'node-4',
                data: {type: 'simpleNode', text: 'This child node 3'},
                position: {x: 500, y: 0},
                endNode: true,
            }),
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
    public form = new FormControl<DfDataModel>(this.data);

    public onScaleChange(zoomLevel: number): void {
        this.currentScale$.next(zoomLevel);
    }

    public onConnectionCreated(event: DfEvent<DfDataConnection>): void {
        console.warn(event, 'onConnectionCreated');
    }

    public onConnectionDeleted(event: DfEvent<DfDataConnection>): void {
        console.warn(event, 'onConnectionDeleted');
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
        this.editor.resetPosition();
    }

    public addNodeToDrawFlow(): void {
        const id = `qwqe${this.counter}`;

        this.data.nodes.set(id, {
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
