"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = exports.SimpleArray = void 0;
class SimpleArray {
    constructor(arrayOfArrays) {
        this.arrayOfArrays = arrayOfArrays;
    }
    simplify() {
        let simpleArray = [];
        try {
            if (this.arrayOfArrays.length > 0) {
                for (let array of this.arrayOfArrays) {
                    if (typeof array === 'object') {
                        for (let item of array) {
                            simpleArray.push(item);
                        }
                        continue;
                    }
                    simpleArray.push(array);
                }
                return simpleArray;
            }
            throw new RangeError('Tamanho do array inválido');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.SimpleArray = SimpleArray;
const arr = new SimpleArray([
    [1, 2],
    'a',
    'b',
    [5],
    6,
    'd',
    [8, 9, 10],
]).simplify();
exports.arr = arr;
console.log(arr);
