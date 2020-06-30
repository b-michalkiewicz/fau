import { distinct } from "./distinct";

describe("distinct function", () => {
  it("should return an empty array for empty input", () => {
    expect(distinct([])).toEqual([]);
    expect(distinct([], () => true)).toEqual([]);
    expect(distinct([], () => false)).toEqual([]);
  });

  describe("using built-in equality predictor", () => {
    it("should remove duplicates from a primitive array", () => {
      expect(distinct([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
      expect(distinct(["1", "1", "2", "2", "3"])).toEqual(["1", "2", "3"]);
    });

    it("should remove duplicates from an object array", () => {
      const duplicated = { id: "1" };
      expect(distinct([duplicated, duplicated, { id: "1" }])).toEqual([duplicated, { id: "1" }]);
    });
  });

  describe("using given equality predictor", () => {
    it("should remove duplicates from a primitive array", () => {
      expect(distinct([1, 1, 2, 2, 3], () => true)).toEqual([1]);
      expect(distinct([1, 1, 2, 2, 3], () => false)).toEqual([]);
      expect(distinct([1, 1, 2, 2, 3], (x, y) => x === y)).toEqual([1, 2, 3]);
    });

    it("should remove duplicates from an object array", () => {
      const input = [{ id: "1" }, { id: "1" }, { id: "2" }, { id: "2" }, { id: "3" }, { id: "4" }];
      expect(distinct(input, () => true)).toEqual([{ id: "1" }]);
      expect(distinct(input, () => false)).toEqual([]);
      expect(distinct(input, (a, b) => a.id === b.id)).toEqual([{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }]);
    });
  });
});
