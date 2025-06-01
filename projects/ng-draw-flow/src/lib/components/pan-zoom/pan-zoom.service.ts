import {Injectable} from '@angular/core';

import type {DfPanzoomModel} from './pan-zoom.interfaces';

@Injectable()
export class PanZoomService {
    public panzoomModel: DfPanzoomModel = {x: 0, y: 0, offsetX: 0, offsetY: 0, zoom: 1};
    public panzoomDisabled = false;
}
