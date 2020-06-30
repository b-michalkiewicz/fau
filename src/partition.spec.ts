import { partition } from "./partition";

describe("partition function", () => {
  it("should work fine with primitive arrays", () => {
    expect(partition([], () => true)).toEqual([[], []]);
    expect(partition([], () => false)).toEqual([[], []]);
    expect(partition([1, 2, 3, 4, 5], (n) => n > 0)).toEqual([[1, 2, 3, 4, 5], []]);
    expect(partition([1, 2, 3, 4, 5], (n) => n > 10)).toEqual([[], [1, 2, 3, 4, 5]]);
    expect(partition([1, 2, 3, 4, 5], (n) => n > 2)).toEqual([
      [3, 4, 5],
      [1, 2],
    ]);

    expect(partition(["a", "b", "c"], (s) => s === "b")).toEqual([["b"], ["a", "c"]]);

    expect(partition([true, false, true, false], (b) => b)).toEqual([
      [true, true],
      [false, false],
    ]);
    expect(partition([true, false, true, false], (b) => !b)).toEqual([
      [false, false],
      [true, true],
    ]);
  });

  it("should work fine with object arrays", () => {
    expect(partition([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }], (o) => o.id > 2)).toEqual([
      [{ id: 3 }, { id: 4 }, { id: 5 }],
      [{ id: 1 }, { id: 2 }],
    ]);

    expect(partition([{ foo: 1 }, { bar: 2 }, { foo: 3 }, { bar: 4 }, { foo: 5 }], (o) => !!o.foo)).toEqual([
      [{ foo: 1 }, { foo: 3 }, { foo: 5 }],
      [{ bar: 2 }, { bar: 4 }],
    ]);
  });
});
