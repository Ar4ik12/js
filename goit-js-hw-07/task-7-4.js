"use strict";
const span = document.querySelector("#value");
let counterValue = 0;

const btnIncrement = document.querySelector(
  '#counter button[data-action="increment"]'
);
const btnDecrement = document.querySelector(
  '#counter button[data-action="decrement"]'
);

function increment() {
  counterValue += 1;
  span.textContent = counterValue;
}
btnIncrement.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  span.textContent = counterValue;
}
btnDecrement.addEventListener("click", decrement);
