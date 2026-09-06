const NODE_ID_KEYS = ['nodeIds', 'cycleNodes', 'isolatedNodes'] as const;

type ErrorRecord = Record<string, unknown>;

/**
 * Extracts graph node ids from the error shapes supported by ng-draw-flow.
 *
 * Deliberately only inspects the error itself, its known id properties and the
 * compatibility `context` property. It must not walk Angular field trees or
 * arbitrary application objects attached to an error.
 */
export function collectInvalidNodeIds(errors: unknown): Set<string> {
    const nodeIds = new Set<string>();

    if (Array.isArray(errors)) {
        errors.forEach((error) => collectError(error, nodeIds));
    } else if (isRecord(errors)) {
        if (isStructuredError(errors)) {
            collectError(errors, nodeIds);
        } else {
            Object.values(errors).forEach((error) =>
                collectLegacyErrorValue(error, nodeIds),
            );
        }
    }

    return nodeIds;
}

function collectError(error: unknown, nodeIds: Set<string>): void {
    if (!isRecord(error)) {
        return;
    }

    collectKnownIdProperties(error, nodeIds);

    if (hasOwn(error, 'context')) {
        collectCompatibilityContext(error.context, nodeIds);
    }
}

function collectLegacyErrorValue(error: unknown, nodeIds: Set<string>): void {
    if (isStringArray(error)) {
        addIds(error, nodeIds);

        return;
    }

    collectError(error, nodeIds);
}

function collectCompatibilityContext(context: unknown, nodeIds: Set<string>): void {
    if (isStringArray(context)) {
        addIds(context, nodeIds);

        return;
    }

    if (isRecord(context)) {
        collectKnownIdProperties(context, nodeIds);
    }
}

function collectKnownIdProperties(error: ErrorRecord, nodeIds: Set<string>): void {
    NODE_ID_KEYS.forEach((key) => {
        const value = error[key];

        if (isStringArray(value)) {
            addIds(value, nodeIds);
        }
    });
}

function addIds(ids: readonly string[], nodeIds: Set<string>): void {
    ids.forEach((id) => {
        nodeIds.add(id);
    });
}

function isStructuredError(error: ErrorRecord): boolean {
    return typeof error.kind === 'string' || hasOwn(error, 'context');
}

function isRecord(value: unknown): value is ErrorRecord {
    return typeof value === 'object' && value !== null;
}

function isStringArray(value: unknown): value is readonly string[] {
    return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function hasOwn(value: ErrorRecord, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(value, key);
}
