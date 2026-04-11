import {DF_PAN_ZOOM_DEFAULT_OPTIONS, dfPanZoomOptionsProvider} from './pan-zoom.options';

describe('dfPanZoomOptionsProvider', () => {
    it('merges nested background canvas options with defaults', () => {
        const provider = dfPanZoomOptionsProvider({
            backgroundCanvas: {
                visible: false,
            },
        });
        const createOptions =
            provider.useFactory as () => typeof DF_PAN_ZOOM_DEFAULT_OPTIONS;

        expect(createOptions()).toEqual({
            ...DF_PAN_ZOOM_DEFAULT_OPTIONS,
            backgroundCanvas: {
                ...DF_PAN_ZOOM_DEFAULT_OPTIONS.backgroundCanvas,
                visible: false,
            },
        });
    });
});
