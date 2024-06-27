import {Injectable} from '@angular/core';

import {DF_PANZOOM_INITIAL_MODEL} from './panzoom.const';
import type {DfPanzoomModel} from './panzoom.interfaces';

@Injectable()
export class PanzoomService {
    public panzoomModel: DfPanzoomModel = DF_PANZOOM_INITIAL_MODEL;
    public panzoomDisabled = false;
}
