import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import type {DfPanzoomModel} from './pan-zoom.interfaces';

@Injectable()
export class PanZoomService {
    public panzoomModel: DfPanzoomModel = {
        x: 0,
        y: 0,
        offsetX: 0,
        offsetY: 0,
        zoom: 1,
    };

    public panzoomDisabled = false;

    private readonly panzoomModelSubject = new BehaviorSubject<DfPanzoomModel>(
        this.panzoomModel,
    );

    public readonly panzoomModel$ = this.panzoomModelSubject.asObservable();

    public updatePanzoomModel(model: Partial<DfPanzoomModel>): void {
        this.panzoomModel = {...this.panzoomModel, ...model};
        this.panzoomModelSubject.next(this.panzoomModel);
    }
}
