'use strict'

const formatString = function (string) {
    if (string.length > 40) {
        const lengthString = string.slice(0, 40) + '...';
        return lengthString;
    } else {
        return string;
    }
    // 1) проверить первышает ли длина строки 40 символов:
    //1.1) если превышает то обрезать строку до 40 символом и добавить в конец строки "..."
    //1.2) если не превышает то вренуть исходную строку
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
    formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
// вернется форматированная строка