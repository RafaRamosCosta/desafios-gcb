class CommonValue {
  private array1: (number | string)[];
  private array2: (number | string)[];
  constructor(array1: (number | string)[], array2: (number | string)[]) {
    this.array1 = array1;
    this.array2 = array2;
  }

  getCommonValue() {
    let commonValues: (number | string)[] = [];
    try {
      if (this.array1.length > 0 && this.array2.length > 0) {
        for (let item of this.array1) {
          if (this.array2.includes(item)) {
            commonValues.push(item);
          }
        }
        if (commonValues.length > 0) {
          return commonValues;
        }
        return 'Nenhum valor em comum';
      }
      throw new RangeError('Tamanho(s) do(s) array(s) inválido(s)');
    } catch (error) {
      console.log(error);
    }
  }
}

const commonValue: (number | string)[] | string | undefined = new CommonValue(
  [1, 7, 8, 4, 'a'],
  [6, 7, 8, 9, 'a']
).getCommonValue();

console.log(commonValue);

export { CommonValue };
