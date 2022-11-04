class ArrayWithoutDuplicates {
  constructor(array) {
    this.array = array;
  }
  cleanDuplicates() {
    let cleanArray = [];
    try {
      if (this.array.length > 0) {
        for (let val of this.array) {
          if (!cleanArray.includes(val)) {
            cleanArray.push(val);
          }
        }
        return cleanArray;
      }
      throw new Error('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const array = new ArrayWithoutDuplicates([
  5, 5, 4, 4, 3, 2, 1, 2, 3,
]).cleanDuplicates();
console.log(array);
