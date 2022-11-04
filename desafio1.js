class CreateArray {
  constructor() {
    this.array = [];
  }
  populateArray(size, value) {
    try {
      if (size > 0) {
        for (let i = 0; i <= size; i++) {
          this.array[i] = value;
        }
        return this.array;
      }
      throw new Error('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const array = new CreateArray().populateArray(0, 'a');
console.log(array);
