class Parser {
  private array: (string | number)[][];
  constructor(array: (string | number)[][]) {
    this.array = array;
  }
  parseToObject() {
    try {
      if (this.array.length > 0) {
        const obj: any = {};
        for (let arr of this.array) {
          obj[arr[0]] = arr[1];
        }
        return obj;
      }
      throw new RangeError('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const obj: object = new Parser([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]).parseToObject();
console.log(obj);

export { Parser, obj };
