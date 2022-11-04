class CleanedArray {
  constructor(array) {
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
      throw new Error('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const array = new CleanedArray([
  1,
  null,
  2,
  0,
  3,
  undefined,
  false,
  '',
]).cleanArray();
console.log(array);
