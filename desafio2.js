class InvertedArray {
  constructor(array) {
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
      throw new Error('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const array = new InvertedArray([
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
]).invertArray();
console.log(array);
