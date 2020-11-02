/**
 * Returns an array of distinct elements from the given array based on an optional equality predictor.
 */

export function distinct<T>(xs: T[], e?: (x: T, y: T) => boolean): T[] {
    return e ? xs.filter((x, i, acc) => acc.findIndex((y) => e(x, y)) === i) : [...new Set(xs)];
}
