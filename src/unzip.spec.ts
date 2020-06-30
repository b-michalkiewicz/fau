import { unzip } from "./unzip";

describe("unzip function", () => {
  it("should return an empty array for empty input", () => {
    expect(unzip([])).toEqual([[], []]);
  });

  it("should unzip given array", () => {
    expect(
      unzip([
        [1, "1"],
        [2, "2"],
        [3, "3"],
      ])
    ).toEqual([
      [1, 2, 3],
      ["1", "2", "3"],
    ]);
    expect(
      unzip([
        ["1", 1],
        ["2", 2],
        ["3", 3],
      ])
    ).toEqual([
      ["1", "2", "3"],
      [1, 2, 3],
    ]);
  });
});
