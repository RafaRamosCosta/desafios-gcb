class ArrayFilter {
  private array: (number | string)[];
  private filters: (number | string)[];
  constructor(array: (number | string)[], filters: (number | string)[]) {
    this.array = array;
    this.filters = filters;
  }
  filterArray() {
    try {
      if (this.array.length > 0 && this.filters.length > 0) {
        for (let filter of this.filters) {
          this.array = this.array.filter((item) => item !== filter);
        }
        return this.array;
      }
      throw new RangeError('Tamanho do array ou do filtro inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const arr: (number | string)[] | undefined = new ArrayFilter(
  [1, 3, 3, 'a', 'a', 3, 3, 3, 4, 4, 5, 6, 7, 8],
  [3, 4, 'a']
).filterArray();
console.log(arr);

export { arr };
