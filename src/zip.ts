/**
 * Returns an array of tuples formed from two given arrays by combining corresponding elements in pairs.
 */

export function zip<T, S>(xs: T[], ys: S[]): [T, S][] {
    return xs.slice(0, Math.min(xs.length, ys.length)).map((x, i) => [x, ys[i]]);
}
