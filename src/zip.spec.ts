import { zip } from "./zip";

describe("zip function", () => {
  it("should return an empty array for empty input arrays", () => {
    expect(zip([], [])).toEqual([]);
  });

  it("should return an empty array if one of the input arrays is empty", () => {
    expect(zip([1, 2, 3], [])).toEqual([]);
    expect(zip([], [1, 2, 3])).toEqual([]);
  });

  it("should zip two arrays with the same length", () => {
    expect(zip([1, 2, 3], ["1", "2", "3"])).toEqual([
      [1, "1"],
      [2, "2"],
      [3, "3"],
    ]);
    expect(zip(["1", "2", "3"], [1, 2, 3])).toEqual([
      ["1", 1],
      ["2", 2],
      ["3", 3],
    ]);
  });

  it("should zip two arrays with the different length", () => {
    expect(zip([1, 2], ["1", "2", "3"])).toEqual([
      [1, "1"],
      [2, "2"],
    ]);
    expect(zip([1, 2, 3], ["1", "2"])).toEqual([
      [1, "1"],
      [2, "2"],
    ]);
  });
});
