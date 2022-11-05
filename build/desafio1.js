"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = exports.CreateArray = void 0;
class CreateArray {
    constructor() {
        this.array = [];
    }
    populateArray(size, value) {
        try {
            if (size > 0) {
                for (let i = 0; i < size; i++) {
                    this.array[i] = value;
                }
                return this.array;
            }
            throw new RangeError('Tamanho do array inválido');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.CreateArray = CreateArray;
const arr = new CreateArray().populateArray(5, 'a');
exports.arr = arr;
console.log(arr);
