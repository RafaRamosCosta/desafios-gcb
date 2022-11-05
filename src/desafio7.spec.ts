import { EqualArrays } from "./desafio7";

describe("EqualArrays", () => {
    it("should return true if the arrays are equal", () => {
        const arr: boolean | undefined = new EqualArrays(
            ["a", 2, "c"],
            ["a", 2, "c"]
        ).compareArrays();
        expect(arr).toEqual(true);
    });
})