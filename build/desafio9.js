"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = void 0;
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
            throw new Error('Condição de divisão inválida ou array vazio');
        }
        catch (err) {
            console.log(err);
        }
    }
}
const arr = new SplittedArray([
    1, 'b', 3, 'd', 5, 'e', 7, 'f', 9, 10,
]).splitArray(3);
exports.arr = arr;
console.log(arr);
