class CreateArray {
  private array: (number | string)[];
  constructor() {
    this.array = [];
  }
  populateArray(size: number, value: number | string) {
    try {
      if (size > 0) {
        for (let i = 0; i < size; i++) {
          this.array[i] = value;
        }
        return this.array;
      }
      throw new RangeError('Tamanho do array inválido');
    } catch (error) {
      console.log(error);
    }
  }
}

const arr: (number | string)[] | undefined = new CreateArray().populateArray(
  5,
  'a'
);
console.log(arr);

export { CreateArray, arr };
