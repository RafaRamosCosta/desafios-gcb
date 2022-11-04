"use strict";
class CommonValue {
    constructor(array1, array2) {
        this.array1 = array1;
        this.array2 = array2;
    }
    getCommonValue() {
        let commonValues = [];
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
            throw new Error('Tamanho(s) do(s) array(s) inválido(s)');
        }
        catch (error) {
            console.log(error);
        }
    }
}
const commonValue = new CommonValue([1, 7, 8, 4, 'a'], [6, 7, 8, 9, 'a']).getCommonValue();
console.log(commonValue);
