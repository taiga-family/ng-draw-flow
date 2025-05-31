import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NgDrawFlowComponent} from '@ng-draw-flow/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    selector: 'app-connectors',
    imports: [NgDrawFlowComponent, ReactiveFormsModule, TuiAddonDoc],
    templateUrl: './connectors.component.html',
    styleUrls: ['./connectors.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConnectorsComponent {}
