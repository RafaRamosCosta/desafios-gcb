class ArrayWithoutDuplicates {
  private array: (number | string)[];
  constructor(array: (number | string)[]) {
    this.array = array;
  }
  cleanDuplicates() {
    let cleanArray: (number | string)[] = [];
    try {
      if (this.array.length > 0) {
        for (let val of this.array) {
          if (!cleanArray.includes(val)) {
            cleanArray.push(val);
          }
        }
        return cleanArray;
      }
      throw new RangeError('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

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
console.log(arr);

export { arr };
