import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    DfConnectorPosition,
    DfInputComponent,
    DrawFlowBaseNode,
} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-input-node',
    imports: [DfInputComponent],
    templateUrl: './input-node.component.html',
    styleUrls: ['./input-node.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNodeComponent extends DrawFlowBaseNode {
    protected connectorPosition = DfConnectorPosition;
}
