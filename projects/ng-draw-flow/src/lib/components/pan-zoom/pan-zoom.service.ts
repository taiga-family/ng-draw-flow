import {Injectable} from '@angular/core';

import {DF_PAN_ZOOM_INITIAL_MODEL} from './pan-zoom.const';
import type {DfPanzoomModel} from './pan-zoom.interfaces';

@Injectable()
export class PanZoomService {
    public panzoomModel: DfPanzoomModel = DF_PAN_ZOOM_INITIAL_MODEL;
    public panzoomDisabled = false;
}
