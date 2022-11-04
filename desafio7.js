class EqualArrays {
  constructor(array1, array2) {
    this.array1 = array1;
    this.array2 = array2;
  }
  compareArrays() {
    try {
      if (this.array1.length > 0 && this.array2.length > 0) {
        if (this.array1.length !== this.array2.length) {
          return false;
        }
        for (let i = 0; i < this.array1.length; i++) {
          if (this.array1[i] !== this.array2[i]) {
            return false;
          }
        }
        return true;
      }
      throw new Error('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const array = new EqualArrays([1, 3, 2], [1, 3, 2]).compareArrays();
console.log(array);
