"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arr = void 0;
class EqualArrays {
    constructor(array1, array2) {
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
            throw new Error('Tamanho do array inválido');
        }
        catch (error) {
            console.log(error);
        }
    }
}
const arr = new EqualArrays(["a", 2, "c"], ["a", 2, "c"]).compareArrays();
exports.arr = arr;
console.log(arr);
