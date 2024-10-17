import { TuiAddonDoc } from "@taiga-ui/addon-doc";
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NgDrawFlowComponent} from '@ng-draw-flow/core';

@Component({
    standalone: true,
    selector: 'app-connectors',
    imports: [NgDrawFlowComponent, ReactiveFormsModule, TuiAddonDoc],
    templateUrl: './connectors.component.html',
    styleUrls: ['./connectors.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConnectorsComponent {}
