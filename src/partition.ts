/**
 * Returns a pair of two arrays which first contains all elements that satisfy predicate p and second all elements that do not.
 */

export function partition<T>(zs: T[], p: (x: T) => boolean): [T[], T[]] {
  return zs.reduce(([xs, ys]: [T[], T[]], x) => (p(x) ? [[...xs, x], ys] : [xs, [...ys, x]]), [[], []]);
}
