class SimpleArray {
  private arrayOfArrays: any[];
  constructor(arrayOfArrays: any[]) {
    this.arrayOfArrays = arrayOfArrays;
  }
  simplify() {
    let simpleArray = [];
    try {
      if (this.arrayOfArrays.length > 0) {
        for (let array of this.arrayOfArrays) {
          if (typeof array === 'object') {
            for (let item of array) {
              simpleArray.push(item);
            }
            continue;
          }
          simpleArray.push(array);
        }
        return simpleArray;
      }
      throw new RangeError('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const arr: any[] | undefined = new SimpleArray([
  [1, 2],
  'a',
  'b',
  [5],
  6,
  'd',
  [8, 9, 10],
]).simplify();
console.log(arr);
export { arr };
