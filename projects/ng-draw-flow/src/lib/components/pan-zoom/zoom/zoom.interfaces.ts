export interface DfZoom {
    readonly clientX: number;
    readonly clientY: number;
    readonly delta: number;
    readonly event: TouchEvent | WheelEvent;
}
