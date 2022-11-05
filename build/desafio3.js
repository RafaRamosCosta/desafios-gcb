"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = exports.CleanedArray = void 0;
class CleanedArray {
    constructor(array) {
        this.array = array;
    }
    cleanArray() {
        try {
            if (this.array.length > 0) {
                let cleanedArray = [];
                for (let i of this.array) {
                    if (i) {
                        cleanedArray[cleanedArray.length] = i;
                    }
                }
                return cleanedArray;
            }
            throw new RangeError('Tamanho do array inválido');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.CleanedArray = CleanedArray;
const arr = new CleanedArray([
    1,
    null,
    'b',
    2,
    'c',
    0,
    'd',
    3,
    undefined,
    false,
    '',
]).cleanArray();
exports.arr = arr;
console.log(arr);
