import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
    DfConnectorPosition,
    DfInputComponent,
    DfOutputComponent,
    DrawFlowBaseNode,
} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-node',
    imports: [DfInputComponent, DfOutputComponent],
    templateUrl: './multi-connectors.component.html',
    styleUrls: ['./multi-connectors.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiConnectorsComponent extends DrawFlowBaseNode {
    protected connectorPosition = DfConnectorPosition;
}
