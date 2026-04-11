import {PanZoomBoundsTracker} from './pan-zoom.bounds-tracker';

describe('PanZoomBoundsTracker', () => {
    it('builds bounds from tracked items', () => {
        const tracker = new PanZoomBoundsTracker();
        const first = {id: 'a', minX: -50, minY: -20, maxX: 30, maxY: 40};
        const second = {id: 'b', minX: 100, minY: 10, maxX: 220, maxY: 90};

        tracker.add(first);
        tracker.add(second);

        expect(tracker.toJSON()).toEqual({
            length: 2,
            minX: -50,
            minY: -20,
            maxX: 220,
            maxY: 90,
        });
    });

    it('updates bounds incrementally when an item changes', () => {
        const tracker = new PanZoomBoundsTracker();
        const item = {id: 'a', minX: -50, minY: -20, maxX: 30, maxY: 40};

        tracker.add(item);
        tracker.update(item, {minX: -10, minY: -5, maxX: 80, maxY: 120});

        expect(tracker.toJSON()).toEqual({
            length: 1,
            minX: -10,
            minY: -5,
            maxX: 80,
            maxY: 120,
        });
    });

    it('recalculates bounds after removing a boundary item', () => {
        const tracker = new PanZoomBoundsTracker();
        const left = {id: 'left', minX: -100, minY: -10, maxX: -20, maxY: 40};
        const center = {id: 'center', minX: 10, minY: -30, maxX: 50, maxY: 20};

        tracker.add(left);
        tracker.add(center);
        tracker.remove(left);

        expect(tracker.toJSON()).toEqual({
            length: 1,
            minX: 10,
            minY: -30,
            maxX: 50,
            maxY: 20,
        });
    });

    it('returns zero bounds when empty', () => {
        const tracker = new PanZoomBoundsTracker();

        expect(tracker.toJSON()).toEqual({
            length: 0,
            minX: 0,
            minY: 0,
            maxX: 0,
            maxY: 0,
        });
    });
});
