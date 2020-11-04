import { sameElements } from "./sameElements";

describe("sameElements function", () => {
    it("should return false for not equal primitive arrays", () => {
        expect(sameElements([1, 2, 3], [])).toEqual(false);
        expect(sameElements([1, 2, 3], [1, 2])).toEqual(false);
        expect(sameElements([1, 2, 3], [2, 1, 3])).toEqual(false);

        expect(sameElements([true, false], [false])).toEqual(false);
        expect(sameElements([true, false], [false, true])).toEqual(false);
    });

    it("should return true for equal primitive arrays", () => {
        expect(sameElements([1, 2, 3], [1, 2, 3])).toEqual(true);

        expect(sameElements([true, false], [true, false])).toEqual(true);
    });

    it("should return false for not equal object arrays with no predicate", () => {
        expect(sameElements([{ id: 1 }, { id: 2 }], [{ id: 1 }])).toEqual(false);
        expect(sameElements([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 1 }])).toEqual(false);
        expect(sameElements([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }])).toEqual(false);

        expect(sameElements([libObject1, libObject2], [libObject2, libObject1])).toEqual(false);
    });

    it("should return false for not equal object arrays with predicate", () => {
        expect(sameElements([{ id: 1 }, { id: 2 }], [{ id: 1 }], predicate)).toEqual(false);
        expect(sameElements([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 1 }], predicate)).toEqual(false);
    });

    it("should return true for the same array", () => {
        const a = [{ id: 1 }, { id: 2 }];
        expect(sameElements(a, a)).toEqual(true);
    });

    it("should return true for equal object arrays", () => {
        expect(sameElements([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }], predicate)).toEqual(true);

        expect(sameElements([libObject1, libObject2], [libObject1, libObject2])).toEqual(true);
    });
});

const libObject1 = new Date();
const libObject2 = new Date();

interface TestObject {
    id: number;
}

const predicate = (a: TestObject, b: TestObject) => a.id === b.id;
