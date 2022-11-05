import { CreateArray } from './desafio1';

describe('Create array', () => {
  it('should create an array of numbers with the given size', () => {
    const array: (string | number)[] | undefined =
      new CreateArray().populateArray(5, 1);
    expect(array).toEqual([1, 1, 1, 1, 1]);
  });

  it('should have the typeof === "object"', () => {
    const array: (string | number)[] | undefined =
      new CreateArray().populateArray(5, 1);
    expect(typeof array === 'object').toBeTruthy();
  });
});
