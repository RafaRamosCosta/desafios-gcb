import { SimpleArray } from './desafio8';

describe('SimpleArray', () => {
  it('should return an simplified array', () => {
    const arr: (number | string)[] | undefined = new SimpleArray([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]).simplify();
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
