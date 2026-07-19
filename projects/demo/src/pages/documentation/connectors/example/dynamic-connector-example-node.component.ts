import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    type DfDataConnectorConfig,
    DfInputComponent,
    DfOutputComponent,
    DfOutputMode,
    DrawFlowBaseNode,
} from '@ng-draw-flow/core';
import {TuiIcon} from '@taiga-ui/core';

import {DynamicConnectorExampleActionsService} from './dynamic-connector-example-actions.service';

@Component({
    standalone: true,
    selector: 'dynamic-connector-example-node',
    imports: [DfInputComponent, DfOutputComponent, TuiIcon],
    templateUrl: './dynamic-connector-example-node.component.html',
    styleUrl: './dynamic-connector-example-node.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicConnectorExampleNodeComponent extends DrawFlowBaseNode {
    private readonly actions = inject(DynamicConnectorExampleActionsService);

    protected readonly outputMode = DfOutputMode;

    protected addChild(connector: DfDataConnectorConfig): void {
        this.actions.addChild(connector);
    }
}
