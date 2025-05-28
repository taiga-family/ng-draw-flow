/**
 * Deep comparison of two values
 * @param a - first value to compare
 * @param b - second value to compare
 * @param visited - Map to track visited objects (for circular reference detection)
 * @returns boolean result of comparison
 */
export function deepEqual(a: any, b: any, visited = new Map()): boolean {
    // 1. Strict equality & primitives
    if (a === b) {
        return true;
    }

    if (a == null || b == null) {
        return false;
    } // handles null & undefined

    const typeA = typeof a;
    const typeB = typeof b;

    if (typeA !== typeB) {
        return false;
    }

    // Special-case NaN
    if (typeA !== 'object') {
        return typeA === 'number' && Number.isNaN(a) && Number.isNaN(b);
    }

    // 2. Circular-reference handling
    if (visited.has(a)) {
        return visited.get(a) === b;
    }

    visited.set(a, b);

    // 3. Arrays
    const isArrayA = Array.isArray(a);
    const isArrayB = Array.isArray(b);

    if (isArrayA !== isArrayB) {
        return false;
    }

    if (isArrayA) {
        if (a.length !== b.length) {
            return false;
        }

        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i], visited)) {
                return false;
            }
        }

        return true;
    }

    // 4. Special built-ins
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }

    if (a instanceof RegExp && b instanceof RegExp) {
        return a.toString() === b.toString();
    }

    // 5. Map
    if (a instanceof Map && b instanceof Map) {
        if (a.size !== b.size) {
            return false;
        }

        for (const [key, value] of a.entries()) {
            if (!b.has(key) || !deepEqual(value, b.get(key), visited)) {
                return false;
            }
        }

        return true;
    }

    // 6. Set
    if (a instanceof Set && b instanceof Set) {
        if (a.size !== b.size) {
            return false;
        }

        const arrA = Array.from(a);
        const arrB = Array.from(b);

        const primitivesOnly = (arr: unknown[]): boolean =>
            arr.every((item) => typeof item !== 'object' || item === null);

        // Primitive sets → sort with comparator for deterministic equality
        if (primitivesOnly(arrA) && primitivesOnly(arrB)) {
            const primitiveCompare = (x: unknown, y: unknown): number =>
                typeof x === 'number' && typeof y === 'number'
                    ? x - y
                    : String(x).localeCompare(String(y));

            arrA.sort(primitiveCompare);
            arrB.sort(primitiveCompare);

            for (let i = 0; i < arrA.length; i++) {
                if (arrA[i] !== arrB[i]) {
                    return false;
                }
            }

            return true;
        }

        // Non-primitive sets → element-wise deep comparison
        return (
            arrA.every((itemA) =>
                arrB.some((itemB) => deepEqual(itemA, itemB, new Map(visited))),
            ) &&
            arrB.every((itemB) =>
                arrA.some((itemA) => deepEqual(itemA, itemB, new Map(visited))),
            )
        );
    }

    // 7. Plain objects
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    return keysA.every(
        (key) =>
            Object.prototype.hasOwnProperty.call(b, key) &&
            deepEqual(a[key], b[key], visited),
    );
}
