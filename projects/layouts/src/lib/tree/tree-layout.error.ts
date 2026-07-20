export type DfTreeLayoutErrorCode =
    | 'disconnected-graph'
    | 'duplicate-node'
    | 'duplicate-output-order'
    | 'invalid-output-order'
    | 'invalid-root'
    | 'missing-node'
    | 'missing-output-order'
    | 'multiple-parents';

export class DfTreeLayoutError extends Error {
    constructor(
        public readonly code: DfTreeLayoutErrorCode,
        message: string,
        public readonly nodeIds: readonly string[] = [],
    ) {
        super(message);
        this.name = 'DfTreeLayoutError';
    }
}
