'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.arr = void 0;
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
const arr = new InvertedArray([
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
exports.arr = arr;
console.log(arr);
