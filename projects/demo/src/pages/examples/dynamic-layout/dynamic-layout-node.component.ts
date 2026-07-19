import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    type DfDataConnectorConfig,
    DfInputComponent,
    DfOutputComponent,
    DfOutputMode,
    DrawFlowBaseNode,
} from '@ng-draw-flow/core';
import {TuiIcon} from '@taiga-ui/core';

import {DynamicLayoutActionsService} from './dynamic-layout-actions.service';

@Component({
    standalone: true,
    selector: 'dynamic-layout-node',
    imports: [DfInputComponent, DfOutputComponent, TuiIcon],
    template: `
        <ng-template #addChildIcon>
            <tui-icon
                icon="@tui.plus"
                class="add-child-icon"
            />
        </ng-template>

        @if (!startNode) {
            <df-input
                class="input"
                [connectorData]="{
                    nodeId,
                    connectorId: nodeId + '-input-1',
                    single: true,
                }"
            />
        }

        <span class="title">{{ model.title }}</span>
        <df-output
            title="Add child"
            class="add-child"
            [connectorData]="{
                nodeId,
                connectorId: nodeId + '-output-1',
                single: false,
                data: {childType: 'dynamicNode'},
            }"
            [content]="addChildIcon"
            [layoutOrder]="0"
            [mode]="outputMode.Action"
            (activated)="addChild($event)"
        />
    `,
    styleUrl: './dynamic-layout-node.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicLayoutNodeComponent extends DrawFlowBaseNode {
    private readonly actions = inject(DynamicLayoutActionsService);

    protected readonly outputMode = DfOutputMode;

    protected addChild(connector: DfDataConnectorConfig): void {
        this.actions.addChild(connector);
    }
}
