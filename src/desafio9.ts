class SplittedArray {
  private array: (number | string)[];
  constructor(array: (number | string)[]) {
    this.array = array;
  }

  splitArray(splitCondition: number) {
    let splittedArray: (number | string)[][] = [];
    try {
      if (
        splitCondition > 0 &&
        splitCondition < this.array.length &&
        this.array.length > 0
      ) {
        for (let i = 0; i < this.array.length; i += splitCondition) {
          splittedArray.push(this.array.slice(i, i + splitCondition));
        }
        return splittedArray;
      } else if (splitCondition <= 0) {
        throw new Error('Condição de divisão inválida');
      }
      throw new RangeError('Tamanho do array inválido');
    } catch (err) {
      console.log(err);
    }
  }
}

const arr: (number | string)[][] | undefined = new SplittedArray([
  1,
  'b',
  3,
  'd',
  5,
  'e',
  7,
  'f',
  9,
  10,
]).splitArray(3);
console.log(arr);
export { arr };
