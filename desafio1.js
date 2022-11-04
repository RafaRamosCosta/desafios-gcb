class CreateArray {
  constructor() {
    this.array = [];
  }
  populateArray(size, value) {
    for (let i = 0; i <= size; i++) {
      this.array[i] = value;
    }
    return this.array;
  }
}

const array = new CreateArray(10, 'a').populateArray(10, 'a');
console.log(array);
