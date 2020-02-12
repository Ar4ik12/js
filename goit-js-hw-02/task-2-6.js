"use strict";

let input;
const numbers = [];
let total = 0;

while (input !== null) {
    input = prompt('Введите число');
    if (Number.isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        numbers.push(Number(input));
    }
}

const sum = function (array) {
    for (let element of array) {
        total += element;
    }
    return total;
};

console.log(`Общая сумма чисел равна ${sum(numbers)}`);