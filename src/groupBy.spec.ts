import { groupBy } from "./groupBy";

describe("groupBy function", () => {
    it("should work fine", () => {
        expect(groupBy([1, 2, 3, 4, 5], (n) => n % 2 === 0)).toEqual(
            new Map([
                [true, [2, 4]],
                [false, [1, 3, 5]],
            ]),
        );

        expect(
            groupBy(
                [
                    { key: 1, value: 1 },
                    { key: 1, value: 2 },
                    { key: 2, value: 22 },
                    { key: 3, value: 3 },
                ],
                (o) => o.key,
            ),
        ).toEqual(
            new Map([
                [
                    1,
                    [
                        { key: 1, value: 1 },
                        { key: 1, value: 2 },
                    ],
                ],
                [2, [{ key: 2, value: 22 }]],
                [3, [{ key: 3, value: 3 }]],
            ]),
        );
    });
});
