'use strict'

const credits = 23580;
const pricePerDroid = 3000;

const numbersDroid = prompt("Сколько дронов вы хотите купить?");
const totalPrice = Number(numbersDroid) * pricePerDroid;
const balanceCredits = credits - totalPrice;

if (numbersDroid == null) {
    console.log("Отменено пользователем!");
} else if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
} else {
    console.log(`Вы купили ${numbersDroid} дроидов, на счету осталось ${balanceCredits} кредитов.`);
}