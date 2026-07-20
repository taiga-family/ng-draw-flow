import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {
    DfArrowhead,
    DfConnectionType,
    type DfDataModel,
    dfPanZoomOptionsProvider,
    NgDrawFlowComponent,
    provideNgDrawFlowConfigs,
} from '@ng-draw-flow/core';

import {ConnectorExampleNodeComponent} from './connector-example-node.component';

@Component({
    standalone: true,
    selector: 'connector-example',
    imports: [NgDrawFlowComponent, ReactiveFormsModule],
    template: `
        <div class="editor">
            <ng-draw-flow [formControl]="form" />
        </div>
    `,
    styles: `
        :host {
            display: block;
        }

        .editor {
            block-size: 22rem;
            background: #fff;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
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
            connections: [],
        },
        {nonNullable: true},
    );
}
