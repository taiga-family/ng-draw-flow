import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiButton, TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'app-title-node',
    imports: [RouterLink, TuiButton, TuiLink],
    templateUrl: './title-node.component.html',
    styleUrls: ['./title-node.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleNodeComponent {}
