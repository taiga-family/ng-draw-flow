import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    type DfDataConnectorConfig,
    DfInputComponent,
    DfOutputComponent,
    DfOutputMode,
    DrawFlowBaseNode,
} from '@ng-draw-flow/core';
import {TuiIcon} from '@taiga-ui/core';

import {ConnectorExampleActionsService} from './connector-example-actions.service';

@Component({
    standalone: true,
    selector: 'connector-example-node',
    imports: [DfInputComponent, DfOutputComponent, TuiIcon],
    templateUrl: './connector-example-node.component.html',
    styleUrl: './connector-example-node.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectorExampleNodeComponent extends DrawFlowBaseNode {
    private readonly actions = inject(ConnectorExampleActionsService);

    protected readonly outputMode = DfOutputMode;

    protected activate(connector: DfDataConnectorConfig): void {
        this.actions.activate(connector);
    }
}
