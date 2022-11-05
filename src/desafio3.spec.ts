import { CleanedArray } from "./desafio3";

describe('Cleaned Array', () => {
    it('should return an array without falsy values', () => {
      const cleanArray: CleanedArray | undefined = new CleanedArray([1,
        null,
        'b',
        2,
        'c',
        0,
        'd',
        3,
        undefined,
        false,
        '',])
      expect(cleanArray.cleanArray()).toEqual([1, 'b', 2, 'c', 'd', 3]);
    });
  });