import type {ValidationErrors} from '@angular/forms';

export function collectInvalidNodeIds(errors: ValidationErrors | null): Set<string> {
    if (!errors) {
        return new Set();
    }

    const allIds: string[] = Object.values(errors)
        .map((v) => {
            if (Array.isArray(v) && v.every((x) => typeof x === 'string')) {
                return v as string[];
            }

            if (v && typeof v === 'object' && Array.isArray(v.nodeIds)) {
                return v.nodeIds as string[];
            }

            return [];
        })
        .reduce<string[]>((acc, arr) => acc.concat(arr), []);

    return new Set(allIds); // uniq
}
