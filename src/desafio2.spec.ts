import { InvertedArray } from './desafio2';

describe('Inverted array', () => {
  it('should return the inverted array of numbers and/or string', () => {
    const invArr: (string | number)[] | undefined = new InvertedArray([
      1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e',
    ]).invertArray();
    expect(invArr).toEqual(['e', 5, 'd', 4, 'c', 3, 'b', 2, 'a', 1]);
  });
});
