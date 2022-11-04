class InvertedArray {
  private array: (number | string)[];
  constructor(array: (number | string)[]) {
    this.array = array;
  }
  invertArray() {
    try {
      if (this.array.length > 0) {
        let invArray = [];
        for (let i = this.array.length - 1; i >= 0; i--) {
          let item = this.array[i];
          invArray[invArray.length] = item;
        }
        return invArray;
      }
      throw new RangeError('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const arr: (string | number)[] | undefined = new InvertedArray([
  'a',
  1,
  'b',
  2,
  'c',
  3,
  'd',
  4,
  'e',
  5,
  'f',
]).invertArray();
console.log(arr);
export { arr };
