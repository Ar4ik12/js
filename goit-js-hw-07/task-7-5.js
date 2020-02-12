"use strict";

const input = document.querySelector("#name-input");
const textSpan = document.querySelector("#name-output");

input.addEventListener("input", inputText);

function inputText() {
  textSpan.textContent = input.value;
  if (textSpan.textContent === "") {
    textSpan.textContent = "незнакомец";
  }
}
