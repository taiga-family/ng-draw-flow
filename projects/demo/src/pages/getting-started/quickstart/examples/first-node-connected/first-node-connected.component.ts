import {NgIf} from '@angular/common';
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
    imports: [DfInputComponent, DfOutputComponent, NgIf],
    templateUrl: './first-node-connected.component.html',
    styleUrls: ['./first-node-connected.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstNodeConnectedComponent extends DrawFlowBaseNode {
    protected connectorPosition = DfConnectorPosition;
}
