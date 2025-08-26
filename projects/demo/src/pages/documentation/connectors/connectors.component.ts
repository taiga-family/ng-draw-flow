import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {NgDrawFlowComponent} from '@ng-draw-flow/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'app-connectors',
    imports: [NgDrawFlowComponent, ReactiveFormsModule, RouterLink, TuiAddonDoc, TuiLink],
    templateUrl: './connectors.component.html',
    styleUrls: ['./connectors.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ConnectorsComponent {}
