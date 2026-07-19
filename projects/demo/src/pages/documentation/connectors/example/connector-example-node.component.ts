import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'connector-example-node',
    imports: [DfInputComponent, DfOutputComponent],
    templateUrl: './connector-example-node.component.html',
    styleUrl: './connector-example-node.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectorExampleNodeComponent extends DrawFlowBaseNode {}
