import {MockBuilder, MockRender} from 'ng-mocks';

import {SelectionService} from './selection.service';

describe('SelectionService', () => {
    let service: SelectionService;
    let el1: HTMLElement;
    let el2: HTMLElement;
    let scene: HTMLElement;

    beforeEach(async () => {
        await MockBuilder(SelectionService);
        service = MockRender(SelectionService).point.componentInstance;
        el1 = document.createElement('div');
        el2 = document.createElement('div');
        scene = document.createElement('div');
        scene.dataset.element = 'scene';
        document.body.appendChild(el1);
        document.body.appendChild(el2);
        document.body.appendChild(scene);
    });

    afterEach(() => {
        document.body.removeChild(el1);
        document.body.removeChild(el2);
        document.body.removeChild(scene);
        service.ngOnDestroy();
        jest.clearAllMocks();
    });

    it('tracks selection state for registered elements', () => {
        const cb = jest.fn();

        service.registerElement(el1, cb);

        service.selectElement(el1);

        expect(service.isSelected(el1)).toBe(true);
        expect(cb).toHaveBeenCalledWith(true);

        service.deselectElement(el1);

        expect(service.isSelected(el1)).toBe(false);
        expect(cb).toHaveBeenCalledWith(false);
    });

    it('clears selection when clicking on the scene', () => {
        service.registerElement(el1, jest.fn());
        service.selectElement(el1);

        scene.dispatchEvent(new MouseEvent('mousedown', {bubbles: true}));
        scene.dispatchEvent(new MouseEvent('mouseup', {bubbles: true}));

        expect(service.isSelected(el1)).toBe(false);
    });
});
