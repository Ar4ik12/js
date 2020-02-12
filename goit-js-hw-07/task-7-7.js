"use strict";

const inputFuntSize = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputFuntSize.addEventListener("input", inputSize);

function inputSize() {
  spanText.style.fontSize = inputFuntSize.value + "px";
}
