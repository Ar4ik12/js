"use strict";

const liItem = document.querySelectorAll("li.item");
console.log(`В списке ${liItem.length} укактегории`);
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const hItem = document.querySelectorAll(".item");

hItem.forEach(tag => {
  console.log(`Категория: ${tag.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${tag.querySelectorAll("li").length}`);
});
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
