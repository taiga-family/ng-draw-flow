import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {D3ZoomDirective, D3ZoomService} from '@ng-draw-flow/core';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    selector: 'd3-zoom-example',
    imports: [AsyncPipe, CommonModule, D3ZoomDirective, TuiAddonDoc],
    templateUrl: './d3-zoom-example.component.html',
    styleUrls: ['./d3-zoom-example.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class D3ZoomExampleComponent {
    protected readonly zoom = inject(D3ZoomService);
}
