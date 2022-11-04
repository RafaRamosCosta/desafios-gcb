class CleanedArray {
  constructor(array) {
    this.array = array;
  }
  cleanArray() {
    let arrayLimpo = [];
    for (let i of this.array) {
      if (i) {
        arrayLimpo[arrayLimpo.length] = i;
      }
    }
    return arrayLimpo;
  }
}

const array = new CleanedArray([
  0,
  1,
  false,
  2,
  undefined,
  '',
  3,
  null,
]).cleanArray();
console.log(array);
