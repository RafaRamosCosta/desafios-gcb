import { ArrayWithoutDuplicates } from "./desafio6";

describe('ArrayWithoutDuplicates', () => {
  it('should return an array without duplicates', () => {
    const arr: (number | string)[] | undefined = new ArrayWithoutDuplicates([
      5,
      5,
      4,
      4,
      3,
      'b',
      'b',
      2,
      1,
      'a',
      2,
      'c',
      3,
    ]).cleanDuplicates();
    expect(arr).toEqual([5, 4, 3, 'b', 2, 1, 'a', 'c']);
  });
});
