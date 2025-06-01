/**
 * Clamps a value between two inclusive limits
 *
 * @param value
 * @param min lower limit
 * @param max upper limit
 */
export function dfClamp(value: number, min: number, max: number): number {
    return Math.min(max, Math.max(min, value));
}
