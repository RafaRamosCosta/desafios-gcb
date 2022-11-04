class EqualArrays {
  private array1: (number | string)[];
  private array2: (number | string)[];
  constructor(array1: (number | string)[], array2: (number | string)[]) {
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
      throw new RangeError('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const arr: boolean | undefined = new EqualArrays(
  ["a", 2, "c"],
  ["a", 2, "c"]
).compareArrays();
console.log(arr);

export { arr };
