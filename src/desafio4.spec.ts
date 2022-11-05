import { Parser } from "./desafio4";

describe('Parser', () => {
  it('should return an object with the array values', () => {
    const parser: Parser = new Parser([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    expect(parser.parseToObject()).toEqual({ a: 1, b: 2, c: 3 });
  });
});
