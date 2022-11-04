class SimpleArray {
  constructor(arrayOfArrays) {
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
      throw new Error('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const array = new SimpleArray([[1, 2], 3, 4, [5], 6, 7, [8, 9, 10]]).simplify();
console.log(array);
