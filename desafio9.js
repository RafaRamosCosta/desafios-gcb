class SplittedArray {
  constructor(array) {
    this.array = array;
  }

  splitArray(splitCondition) {
    let splittedArray = [];
    try {
      if (
        splitCondition > 0 &&
        splitCondition <= this.array.length &&
        this.array.length > 0
      ) {
        for (let i = 0; i < this.array.length; i += splitCondition) {
          splittedArray.push(this.array.slice(i, i + splitCondition));
        }
        return splittedArray;
      }
      throw new Error('Condição de divisão inválida ou array vazio');
    } catch (err) {
      console.log(err);
    }
    return 'Passe uma condição válida e um tamanho';
  }
}

const array = new SplittedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).splitArray(3);
console.log(array);
