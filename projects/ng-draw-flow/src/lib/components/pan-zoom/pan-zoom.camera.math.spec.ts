import {
    clampByPanSize,
    clampScale,
    getContainerOffsets,
    getViewportCenter,
    getViewportZeroPoint,
    zoomAtPoint,
} from './pan-zoom.camera.math';

describe('pan-zoom.camera.math', () => {
    it('clamps scale within min/max', () => {
        expect(clampScale(0.1, 0.25, 3)).toBe(0.25);
        expect(clampScale(2, 0.25, 3)).toBe(2);
        expect(clampScale(4, 0.25, 3)).toBe(3);
    });

    it('keeps zoom anchor point stable in world coordinates', () => {
        const current = {x: 10, y: 20, zoom: 1, offsetX: 0, offsetY: 0};
        const point = {x: 300, y: 240};
        const before = {
            x: (point.x - current.x) / current.zoom,
            y: (point.y - current.y) / current.zoom,
        };

        const next = zoomAtPoint(current, point, 2, {minZoom: 0.25, maxZoom: 3});
        const after = {
            x: (point.x - next.x) / next.zoom,
            y: (point.y - next.y) / next.zoom,
        };

        expect(after.x).toBeCloseTo(before.x, 8);
        expect(after.y).toBeCloseTo(before.y, 8);
    });

    it('clamps pan by current zoom and pan size', () => {
        const clamped = clampByPanSize(
            {x: 9000, y: -9000, zoom: 2, offsetX: 0, offsetY: 0},
            2000,
        );

        expect(clamped.x).toBe(4000);
        expect(clamped.y).toBe(-4000);
    });

    it('calculates viewport center from camera position', () => {
        const center = getViewportCenter({x: -150, y: 200, zoom: 2}, 2000);

        expect(center).toEqual({x: 75, y: -100});
    });

    it('centers zero point in viewport when left and top are null', () => {
        const offsets = getContainerOffsets(
            {width: 1000, height: 800},
            {leftPosition: null, topPosition: null},
        );

        expect(offsets.translateX).toBe(0);
        expect(offsets.offsetX).toBeCloseTo(0, 8);
        expect(offsets.translateY).toBe(0);
        expect(offsets.offsetY).toBeCloseTo(0, 8);
    });

    it('places zero point on viewport edge when left and top are zero', () => {
        const offsets = getContainerOffsets(
            {width: 1000, height: 800},
            {leftPosition: 0, topPosition: 0},
        );

        expect(offsets.translateX).toBe(-500);
        expect(offsets.offsetX).toBe(500);
        expect(offsets.translateY).toBe(-400);
        expect(offsets.offsetY).toBe(400);
    });

    it('shifts zero point from viewport edge by configured values', () => {
        const offsets = getContainerOffsets(
            {width: 1000, height: 800},
            {leftPosition: 100, topPosition: 120},
        );

        expect(offsets.translateX).toBe(-400);
        expect(offsets.offsetX).toBe(400);
        expect(offsets.translateY).toBe(-280);
        expect(offsets.offsetY).toBe(280);
    });

    it('derives viewport zero point from options', () => {
        expect(
            getViewportZeroPoint(
                {width: 1000, height: 800},
                {leftPosition: null, topPosition: null},
            ),
        ).toEqual({x: 500, y: 400});

        expect(
            getViewportZeroPoint(
                {width: 1000, height: 800},
                {leftPosition: 100, topPosition: 120},
            ),
        ).toEqual({x: 100, y: 120});
    });

    it('keeps offsets independent from panSize', () => {
        const withPanSizeOptions = {
            leftPosition: 100,
            topPosition: 120,
            panSize: 10000,
        };
        const withPanSize = getContainerOffsets(
            {width: 1000, height: 800},
            withPanSizeOptions,
        );
        const withoutPanSize = getContainerOffsets(
            {width: 1000, height: 800},
            {leftPosition: 100, topPosition: 120},
        );

        expect(withPanSize.translateX).toBe(withoutPanSize.translateX);
        expect(withPanSize.translateY).toBe(withoutPanSize.translateY);
        expect(withPanSize.offsetX).toBe(withoutPanSize.offsetX);
        expect(withPanSize.offsetY).toBe(withoutPanSize.offsetY);
    });

    it('applies left or top independently when only one axis is configured', () => {
        const xOnly = getContainerOffsets(
            {width: 1000, height: 800},
            {leftPosition: 100, topPosition: null},
        );
        const yOnly = getContainerOffsets(
            {width: 1000, height: 800},
            {leftPosition: null, topPosition: 120},
        );

        expect(xOnly.translateX).toBe(-400);
        expect(xOnly.translateY).toBe(0);
        expect(yOnly.translateX).toBe(0);
        expect(yOnly.translateY).toBe(-280);
    });
});
