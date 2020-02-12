'use strict'

let input;
let total = 0;

while (input !== null) {
    input = prompt("Введите число!");
    if (Number.isNaN(Number(input))) {
        alert("не число");
    } else(
        total = total + Number(input)
    );
}
alert(`сумма чисел ${total}`);