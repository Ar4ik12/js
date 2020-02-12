"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const ingredientList = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();
ingredients.forEach(ingredients => {
  const liIngredient = document.createElement("li");
  liIngredient.textContent = ingredients;
  fragment.appendChild(liIngredient);
});
ingredientList.appendChild(fragment);
