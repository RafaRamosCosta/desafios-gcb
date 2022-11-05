import { ArrayFilter } from "./desafio5";

describe("ArrayFilter", () => {
    it("should return a filtered array", () => {
        const arr: (number | string)[] | undefined = new ArrayFilter(
        [1, 3, 3, "a", "a", 3, 3, 3, 4, 4, 5, 6, 7, 8],
        [3, 4, "a"]
        ).filterArray();
        expect(arr).toEqual([1, 5, 6, 7, 8]);
    });
})