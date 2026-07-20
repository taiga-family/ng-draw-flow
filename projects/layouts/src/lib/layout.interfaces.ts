import {type DfDataModel, type DfNodeSize, type DfPoint} from '@ng-draw-flow/core';

export interface DfLayoutDiagnostic {
    readonly code: string;
    readonly message: string;
    readonly nodeIds?: readonly string[];
}

export interface DfLayoutResult {
    readonly model: DfDataModel;
    readonly diagnostics: readonly DfLayoutDiagnostic[];
}

export interface DfAutoLayoutOptions {
    /** Keeps this node at its current canvas position by translating the result. */
    readonly anchorNodeId?: string;
    /** Layouts this model immediately instead of waiting for form-to-store synchronization. */
    readonly model?: DfDataModel;
}

export enum DfTreeLayoutDirection {
    BottomToTop = 'bottom-to-top',
    LeftToRight = 'left-to-right',
    RightToLeft = 'right-to-left',
    TopToBottom = 'top-to-bottom',
}

export enum DfNodeSizingStrategy {
    Fixed = 'fixed',
    Measured = 'measured',
}

export interface DfFixedNodeSizingOptions {
    readonly strategy: DfNodeSizingStrategy.Fixed;
    readonly size: DfNodeSize;
}

export interface DfMeasuredNodeSizingOptions {
    readonly strategy: DfNodeSizingStrategy.Measured;
    readonly fallback: DfNodeSize;
}

export type DfNodeSizingOptions = DfFixedNodeSizingOptions | DfMeasuredNodeSizingOptions;

export interface DfTreeLayoutOptions {
    readonly direction?: DfTreeLayoutDirection;
    readonly rootId?: string;
    readonly nodeSizing?: DfNodeSizingOptions;
    readonly levelGap?: number;
    readonly siblingGap?: number;
    readonly preserveRootPosition?: boolean;
    readonly origin?: DfPoint;
}
