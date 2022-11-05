"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = exports.SplittedArray = void 0;
class SplittedArray {
    constructor(array) {
        this.array = array;
    }
    splitArray(splitCondition) {
        let splittedArray = [];
        try {
            if (splitCondition > 0 &&
                splitCondition < this.array.length &&
                this.array.length > 0) {
                for (let i = 0; i < this.array.length; i += splitCondition) {
                    splittedArray.push(this.array.slice(i, i + splitCondition));
                }
                return splittedArray;
            }
            else if (splitCondition <= 0) {
                throw new Error('Condição de divisão inválida');
            }
            throw new RangeError('Tamanho do array inválido');
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.SplittedArray = SplittedArray;
const arr = new SplittedArray([
    1,
    'b',
    3,
    'd',
    5,
    'e',
    7,
    'f',
    9,
    10,
]).splitArray(3);
exports.arr = arr;
console.log(arr);
