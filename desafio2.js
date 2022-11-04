class InvertedArray {
  constructor(array) {
    this.array = array;
  }
  invertArray() {
    let invArray = [];
    for (let i = this.array.length - 1; i >= 0; i--) {
      let item = this.array[i];
      invArray[arrayInverso.length] = item;
    }
    return invArray;
  }
}

const array = new InvertedArray([
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'
]).invertArray();
console.log(array);
