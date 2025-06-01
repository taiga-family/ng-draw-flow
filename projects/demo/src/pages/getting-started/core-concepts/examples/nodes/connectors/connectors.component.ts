import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DfInputComponent, DfOutputComponent, DrawFlowBaseNode} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-node',
    imports: [DfInputComponent, DfOutputComponent],
    templateUrl: './connectors.component.html',
    styleUrls: ['./connectors.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectorsComponent extends DrawFlowBaseNode {}
