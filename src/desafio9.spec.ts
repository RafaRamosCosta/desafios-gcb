import { SplittedArray } from './desafio9';

describe('SplittedArray', () => {
  it('should return an array with the splitted values', () => {
    const arr: (number | string)[][] | undefined = new SplittedArray([
      'a',
      2,
      'c',
      4,
      'e',
      6,
      'g',
    ]).splitArray(3);
    expect(arr).toEqual([['a', 2, 'c'], [4, 'e', 6], ['g']]);
  });
});
