/**
 * Groups the array to a map of arrays according to a differentiate function.
 */

export function groupBy<T, S>(xs: T[], d: (x: T) => S): Map<S, T[]> {
    const groupBy = (xs: T[], acc: Map<S, T[]> = new Map()): Map<S, T[]> => {
        if (xs.length === 0) return acc;

        const x = xs[0];
        const group = d(x);

        return groupBy(xs.splice(1), acc.set(group, [...(acc.get(group) || []), x]));
    };

    return groupBy(xs);
}
