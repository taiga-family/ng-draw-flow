import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    DfConnectorPosition,
    DfOutputComponent,
    DrawFlowBaseNode,
} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-output-node',
    imports: [DfOutputComponent],
    templateUrl: './output-node.component.html',
    styleUrls: ['./output-node.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OutputNodeComponent extends DrawFlowBaseNode {
    protected connectorPosition = DfConnectorPosition;
}
