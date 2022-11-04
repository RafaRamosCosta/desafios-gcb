"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = void 0;
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
        }
        catch (error) {
            console.log(error);
        }
    }
}
const arr = new ArrayWithoutDuplicates([
    5,
    5,
    4,
    4,
    3,
    'b',
    'b',
    2,
    1,
    'a',
    2,
    'c',
    3,
]).cleanDuplicates();
exports.arr = arr;
console.log(arr);
