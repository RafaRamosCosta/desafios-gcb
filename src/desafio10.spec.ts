import { CommonValue } from './desafio10';

describe('Common Value', () => {
  it('should return an array with the common values from the other arrays', () => {
    const commonValue = new CommonValue([1, 7, 8, 4, 'a'], [6, 7, 8, 9, 'a']);
    expect(commonValue.getCommonValue()).toEqual([7, 8, 'a']);
  });
});
