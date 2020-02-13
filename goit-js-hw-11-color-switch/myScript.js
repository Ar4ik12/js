"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const btStart = document.querySelector('button[data-action="start"]');
const btStop = document.querySelector('button[data-action="stop"]');
btStop.setAttribute("disabled", "true");
let colorInterval;

function backgroundBody() {
  const colorRand = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.body.style.backgroundColor = colorRand;
}

btStart.addEventListener("click", onStart);

function onStart() {
  colorInterval = setInterval(backgroundBody, 1000);
  btStart.removeEventListener("click", onStart);
  btStart.setAttribute("disabled", "true");
  btStop.removeAttribute("disabled");
  btStop.addEventListener("click", onStop);
}

function onStop() {
  clearInterval(colorInterval);
  btStop.removeEventListener("click", onStop);
  btStop.setAttribute("disabled", "true");
  btStart.removeAttribute("disabled");
  btStart.addEventListener("click", onStart);
}
