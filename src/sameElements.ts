/**
 * Checks if two arrays have the same elements based on optional predicate function (if not provided === equality is used)
 */

export function sameElements<T>(a: T[], b: T[], p?: (x: T, y: T) => boolean): boolean {
    return a === b || (a.length === b.length && a.every((v, i) => (!!p ? p(v, b[i]) : v === b[i])));
}
