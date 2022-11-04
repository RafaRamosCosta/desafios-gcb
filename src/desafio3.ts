class CleanedArray {
  private array: any[]; // passei any[] pois o array para aceitar todos os falsy values, numbers e strings
  constructor(array: any[]) {
    this.array = array;
  }
  cleanArray() {
    try {
      if (this.array.length > 0) {
        let cleanedArray = [];
        for (let i of this.array) {
          if (i) {
            cleanedArray[cleanedArray.length] = i;
          }
        }
        return cleanedArray;
      }
      throw new RangeError('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const arr: (number | string)[] | undefined = new CleanedArray([
  1,
  null,
  'b',
  2,
  'c',
  0,
  'd',
  3,
  undefined,
  false,
  '',
]).cleanArray();
console.log(arr);
export { arr };
