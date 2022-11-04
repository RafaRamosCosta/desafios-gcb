class Parser {
  constructor(array) {
    this.array = array;
  }
  parseToObject() {
    let obj = {};
    for (let arr of this.array) {
        obj[arr[0]] = arr[1];
    }
    return obj;
  }
}

const obj = new Parser([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]).parseToObject();
console.log(obj);
