import {isPlatformBrowser} from '@angular/common';
import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    effect,
    ElementRef,
    inject,
    PLATFORM_ID,
    viewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {animationFrameScheduler} from 'rxjs';

import {DRAW_FLOW_ROOT_ELEMENT} from '../../ng-draw-flow.token';
import {PanZoomControllerService} from './pan-zoom.controller.service';
import {PanZoomService} from './pan-zoom.service';

const GRID_SIZE = 20;
const GRID_PATTERN_REPEAT = 5;
const GRID_DOT_SIZE = 2;
const GRID_MAJOR_DOT_SIZE = GRID_DOT_SIZE * 2;
const GRID_MAJOR_SIMPLE_DOT_SIZE = GRID_DOT_SIZE * 3;
const GRID_VISIBILITY_THRESHOLD = 0.125;
const GRID_PATTERN_SWITCH_SCALE = 0.7;

interface DfPanZoomBackgroundPalette {
    readonly borderColor: string;
    readonly gridColor: string;
    readonly viewportBackground: string;
    readonly workspaceBackground: string;
}

interface DfPanZoomBackgroundPatterns {
    readonly gridColor: string;
    readonly normal: CanvasPattern | null;
    readonly simple: CanvasPattern | null;
}

@Component({
    standalone: true,
    selector: 'df-pan-zoom-background-canvas',
    template: `
        <canvas
            #backgroundCanvas
            aria-hidden="true"
            class="pan-zoom-background__canvas"
        ></canvas>
    `,
    styleUrl: './pan-zoom-background-canvas.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanZoomBackgroundCanvasComponent implements AfterViewInit {
    private readonly backgroundCanvasRef =
        viewChild<ElementRef<HTMLCanvasElement>>('backgroundCanvas');

    private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly destroyRef = inject(DestroyRef);
    private readonly drawFlowElement = inject<HTMLElement>(DRAW_FLOW_ROOT_ELEMENT);
    private readonly platformId = inject(PLATFORM_ID);
    private readonly panZoomService = inject(PanZoomService);
    private readonly panZoomController = inject(PanZoomControllerService);
    private renderScheduled = false;
    private backgroundCanvas: HTMLCanvasElement | null = null;
    private backgroundContext: CanvasRenderingContext2D | null = null;
    private backgroundPatterns: DfPanZoomBackgroundPatterns | null = null;

    constructor() {
        this.watchRenderRequests();

        effect(() => {
            this.panZoomService.camera();
            this.panZoomService.workspaceRect();
            this.panZoomController.viewportZeroPoint();

            if (!this.backgroundCanvas) {
                return;
            }

            this.requestDraw();
        });
    }

    public ngAfterViewInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        this.backgroundCanvas = this.backgroundCanvasRef()?.nativeElement ?? null;
        this.drawNow();
    }

    private watchRenderRequests(): void {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }

        this.panZoomController.renderRequests$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((mode) => {
                if (mode === 'sync') {
                    this.drawNow();
                } else {
                    this.requestDraw();
                }
            });
    }

    private requestDraw(): void {
        if (this.renderScheduled) {
            return;
        }

        this.renderScheduled = true;
        animationFrameScheduler.schedule(() => {
            this.renderScheduled = false;
            this.drawBackground();
        });
    }

    private drawNow(): void {
        this.drawBackground();
    }

    private drawBackground(): void {
        const canvas = this.backgroundCanvas ?? this.backgroundCanvasRef()?.nativeElement;
        const context = this.getBackgroundContext(canvas);
        const {width, height} = this.getViewportSize();

        if (!canvas || !context || !width || !height) {
            return;
        }

        const dpr = typeof window === 'undefined' ? 1 : window.devicePixelRatio || 1;
        const pixelWidth = Math.round(width * dpr);
        const pixelHeight = Math.round(height * dpr);

        if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
            canvas.width = pixelWidth;
            canvas.height = pixelHeight;
            this.backgroundContext = canvas.getContext('2d');
        }

        const ctx = this.backgroundContext;

        if (!ctx) {
            return;
        }

        const palette = this.readBackgroundPalette();
        const camera = this.panZoomService.snapshot();
        const workspaceRect = this.panZoomService.workspaceRect();
        const zeroPoint = this.panZoomController.viewportZeroPoint();
        const workspaceScreenX =
            camera.x + zeroPoint.x + workspaceRect.minX * camera.zoom;
        const workspaceScreenY =
            camera.y + zeroPoint.y + workspaceRect.minY * camera.zoom;
        const workspaceScreenWidth = workspaceRect.width * camera.zoom;
        const workspaceScreenHeight = workspaceRect.height * camera.zoom;

        this.ensureBackgroundPatterns(ctx, palette.gridColor);

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        ctx.fillStyle = palette.viewportBackground;
        ctx.fillRect(0, 0, width, height);

        if (!workspaceScreenWidth || !workspaceScreenHeight) {
            return;
        }

        ctx.fillStyle = palette.workspaceBackground;
        ctx.fillRect(
            workspaceScreenX,
            workspaceScreenY,
            workspaceScreenWidth,
            workspaceScreenHeight,
        );

        ctx.strokeStyle = palette.borderColor;
        ctx.lineWidth = 1;
        ctx.strokeRect(
            workspaceScreenX,
            workspaceScreenY,
            workspaceScreenWidth,
            workspaceScreenHeight,
        );

        const pattern =
            camera.zoom > GRID_PATTERN_SWITCH_SCALE
                ? this.backgroundPatterns?.normal
                : this.backgroundPatterns?.simple;

        if (!pattern || camera.zoom < GRID_VISIBILITY_THRESHOLD) {
            return;
        }

        ctx.save();
        ctx.beginPath();
        ctx.rect(
            workspaceScreenX,
            workspaceScreenY,
            workspaceScreenWidth,
            workspaceScreenHeight,
        );
        ctx.clip();
        ctx.translate(camera.x + zeroPoint.x, camera.y + zeroPoint.y);
        ctx.scale(camera.zoom, camera.zoom);
        ctx.fillStyle = pattern;
        ctx.fillRect(
            workspaceRect.minX,
            workspaceRect.minY,
            workspaceRect.width,
            workspaceRect.height,
        );
        ctx.restore();
    }

    private getBackgroundContext(
        canvas?: HTMLCanvasElement | null,
    ): CanvasRenderingContext2D | null {
        if (this.backgroundContext) {
            return this.backgroundContext;
        }

        if (!canvas) {
            return null;
        }

        this.backgroundContext = canvas.getContext('2d');

        return this.backgroundContext;
    }

    private getViewportSize(): {height: number; width: number} {
        return {
            width:
                this.drawFlowElement.offsetWidth || this.host.nativeElement.clientWidth,
            height:
                this.drawFlowElement.offsetHeight || this.host.nativeElement.clientHeight,
        };
    }

    private readBackgroundPalette(): DfPanZoomBackgroundPalette {
        const styles = getComputedStyle(this.drawFlowElement);

        return {
            viewportBackground:
                styles.getPropertyValue('--df-pan-zoom-viewport-background').trim() ||
                '#eaeaea',
            workspaceBackground:
                styles.getPropertyValue('--df-pan-zoom-workspace-background').trim() ||
                '#f9f9f9',
            gridColor:
                styles.getPropertyValue('--df-pan-zoom-grid-color').trim() || '#d0d2ce',
            borderColor:
                styles.getPropertyValue('--df-pan-zoom-border-color').trim() || '#eaeaea',
        };
    }

    private ensureBackgroundPatterns(
        ctx: CanvasRenderingContext2D,
        gridColor: string,
    ): void {
        if (this.backgroundPatterns?.gridColor === gridColor) {
            return;
        }

        this.backgroundPatterns = {
            gridColor,
            normal: this.createGridPattern(ctx, gridColor, false),
            simple: this.createGridPattern(ctx, gridColor, true),
        };
    }

    private createGridPattern(
        ctx: CanvasRenderingContext2D,
        color: string,
        simple: boolean,
    ): CanvasPattern | null {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        if (!patternContext) {
            return null;
        }

        const patternSize = GRID_PATTERN_REPEAT * GRID_SIZE;
        const majorDotSize = simple ? GRID_MAJOR_SIMPLE_DOT_SIZE : GRID_MAJOR_DOT_SIZE;

        patternCanvas.width = patternSize;
        patternCanvas.height = patternSize;
        patternContext.clearRect(0, 0, patternSize, patternSize);
        patternContext.fillStyle = color;

        for (let x = -1; x < GRID_PATTERN_REPEAT + 1; x++) {
            for (let y = -1; y < GRID_PATTERN_REPEAT + 1; y++) {
                if (x % GRID_PATTERN_REPEAT === 0 && y % GRID_PATTERN_REPEAT === 0) {
                    patternContext.fillRect(
                        x * GRID_SIZE - majorDotSize / 2,
                        y * GRID_SIZE - majorDotSize / 2,
                        majorDotSize,
                        majorDotSize,
                    );
                } else if (!simple) {
                    patternContext.fillRect(
                        x * GRID_SIZE - GRID_DOT_SIZE / 2,
                        y * GRID_SIZE - GRID_DOT_SIZE / 2,
                        GRID_DOT_SIZE,
                        GRID_DOT_SIZE,
                    );
                }
            }
        }

        return ctx.createPattern(patternCanvas, 'repeat');
    }
}
