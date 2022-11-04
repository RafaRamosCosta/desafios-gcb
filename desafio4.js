class Parser {
  constructor(array) {
    this.array = array;
  }
  parseToObject() {
    try {
      if (this.array.length > 0) {
        let obj = {};
        for (let arr of this.array) {
          obj[arr[0]] = arr[1];
        }
        return obj;
      }
      throw new Error('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const obj = new Parser([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]).parseToObject();
console.log(obj);
