class TestResizeObserver implements ResizeObserver {
    public constructor(private readonly callback: ResizeObserverCallback) {}

    public disconnect(): void {}

    public observe(target: Element): void {
        this.callback(
            [
                {
                    borderBoxSize: [],
                    contentBoxSize: [],
                    contentRect: {
                        bottom: 600,
                        height: 600,
                        left: 0,
                        right: 800,
                        top: 0,
                        width: 800,
                        x: 0,
                        y: 0,
                        toJSON: () => ({}),
                    },
                    devicePixelContentBoxSize: [],
                    target,
                },
            ],
            this,
        );
    }

    public unobserve(): void {}
}

Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
    configurable: true,
    get: () => 800,
});
Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    configurable: true,
    get: () => 600,
});

globalThis.ResizeObserver = TestResizeObserver;

if (typeof requestAnimationFrame !== 'function') {
    let nextFrameId = 0;
    const scheduledFrames = new Map<number, number>();

    globalThis.requestAnimationFrame = (callback: FrameRequestCallback): number => {
        const frameId = ++nextFrameId;
        const timeoutId = globalThis.setTimeout(() => {
            scheduledFrames.delete(frameId);
            callback(performance.now());
        }, 0);

        scheduledFrames.set(frameId, timeoutId);

        return frameId;
    };

    globalThis.cancelAnimationFrame = (frameId: number): void => {
        const timeoutId = scheduledFrames.get(frameId);

        if (timeoutId !== undefined) {
            globalThis.clearTimeout(timeoutId);
            scheduledFrames.delete(frameId);
        }
    };
}
