/**
 * Converts given array of tuples into tuple of two arrays.
 */

export function unzip<T, S>(zs: [T, S][]): [T[], S[]] {
  return zs.reduce(
    ([xs, ys]: [T[], S[]], [x, y]) => [
      [...xs, x],
      [...ys, y],
    ],
    [[], []]
  );
}
