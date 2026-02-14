export interface DfPanZoomPanGesture {
    readonly type: 'pan';
    readonly deltaX: number;
    readonly deltaY: number;
    readonly event: TouchEvent | WheelEvent;
}

export interface DfPanZoomZoomGesture {
    readonly type: 'zoom';
    readonly clientX: number;
    readonly clientY: number;
    readonly deltaScale: number;
    readonly event: TouchEvent | WheelEvent;
}

export type DfPanZoomGesture = DfPanZoomPanGesture | DfPanZoomZoomGesture;
