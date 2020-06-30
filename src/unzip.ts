/**
 * Converts given array of tuples into tuple of two arrays.
 */

export function unzip<T, S>(zs: [T, S][]): [T[], S[]] {
  return zs.reduce(
    ([xs, ys], [x, y]) => [
      [...xs, x],
      [...ys, y],
    ],
    [[], []]
  );
}
