import {MockBuilder, MockRender, ngMocks} from 'ng-mocks';

import {ConnectionsService} from './components/connections/connections.service';
import {PanZoomComponent} from './components/pan-zoom/pan-zoom.component';
import {SceneComponent} from './components/scene/scene.component';
import {DfResizeObserver, ErrorsDirective} from './directives';
import {NgDrawFlowComponent} from './ng-draw-flow.component';
import type {DfDataConnection} from './ng-draw-flow.interfaces';
import {DfConnectionPoint} from './ng-draw-flow.interfaces';

describe('NgDrawFlowComponent', () => {
    beforeEach(async () => {
        await MockBuilder(NgDrawFlowComponent)
            .mock(PanZoomComponent)
            .mock(SceneComponent)
            .mock(DfResizeObserver)
            .mock(ErrorsDirective);
    });

    it('creates component', () => {
        const fixture = MockRender(NgDrawFlowComponent);

        expect(fixture.point.componentInstance).toBeInstanceOf(NgDrawFlowComponent);
    });

    it('re-emits scale values from pan-zoom', () => {
        const scaleSpy = jest.fn();

        MockRender('<ng-draw-flow (scale)="scaleSpy($event)"></ng-draw-flow>', {
            scaleSpy,
        });
        const panzoom = ngMocks.find(PanZoomComponent);
        const emitter = ngMocks.output<number>(panzoom, 'scale');

        emitter.emit(42);

        expect(scaleSpy).toHaveBeenCalledWith(42);
    });

    it('removes connection via service', () => {
        const fixture = MockRender(NgDrawFlowComponent);

        fixture.detectChanges();
        const service = ngMocks.findInstance(ConnectionsService);
        const spy = jest.spyOn(service, 'removeConnection');
        const connection: DfDataConnection = {
            source: {
                nodeId: 'a',
                connectorType: DfConnectionPoint.Output,
                connectorId: 'o',
            },
            target: {
                nodeId: 'b',
                connectorType: DfConnectionPoint.Input,
                connectorId: 'i',
            },
        };

        fixture.point.componentInstance.removeConnection(connection);

        expect(spy).toHaveBeenCalledWith(connection);
    });
});
