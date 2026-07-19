import {JsonPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    DfArrowhead,
    DfConnectionPoint,
    DfConnectionType,
    type DfDataModel,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';
import {TuiNotification} from '@taiga-ui/core';

import {ConnectorExampleActionsService} from './connector-example-actions.service';
import {ConnectorExampleNodeComponent} from './connector-example-node.component';

@Component({
    standalone: true,
    selector: 'connector-example',
    imports: [JsonPipe, NgDrawFlowComponent, ReactiveFormsModule, TuiNotification],
    template: `
        <div class="editor">
            <ng-draw-flow [formControl]="form" />
        </div>
        <section
            appearance="info"
            size="s"
            tuiNotification
        >
            Action activations: {{ actions.activations() }}.
            @if (actions.lastData(); as data) {
                Last payload: {{ data | json }}
            }
        </section>
    `,
    styles: `
        :host {
            display: block;
        }

        .editor {
            block-size: 22rem;
            background: #fff;
        }

        [tuiNotification] {
            border-radius: 0;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ConnectorExampleActionsService,
        dfPanZoomOptionsProvider({leftPosition: 60}),
        provideNgDrawFlowConfigs({
            connection: {
                type: DfConnectionType.SmoothStep,
                arrowhead: {type: DfArrowhead.ArrowClosed},
                curvature: 12,
            },
            nodes: {connectorExample: ConnectorExampleNodeComponent},
        }),
    ],
})
export default class ConnectorExampleComponent {
    public readonly actions = inject(ConnectorExampleActionsService);

    public readonly form = new FormControl<DfDataModel>(
        {
            nodes: [
                {
                    id: 'source',
                    data: {type: 'connectorExample', text: 'Source node'},
                    position: {x: 0, y: 0},
                    startNode: true,
                },
                {
                    id: 'target',
                    data: {type: 'connectorExample', text: 'Target node'},
                    position: {x: 300, y: 80},
                    endNode: true,
                },
            ],
            connections: [
                {
                    source: {
                        nodeId: 'source',
                        connectorType: DfConnectionPoint.Output,
                        connectorId: 'source-output-1',
                    },
                    target: {
                        nodeId: 'target',
                        connectorType: DfConnectionPoint.Input,
                        connectorId: 'target-input-1',
                    },
                },
            ],
        },
        {nonNullable: true},
    );
}
