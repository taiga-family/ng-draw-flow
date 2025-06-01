import type {DfDragDropStage} from './drag-drop.enum';

export interface DfDragDropDistance {
    deltaX: number;
    deltaY: number;
}

export interface DfDragDrop {
    sourceElement: HTMLElement;
    distance: DfDragDropDistance;
    stage: DfDragDropStage;
}
