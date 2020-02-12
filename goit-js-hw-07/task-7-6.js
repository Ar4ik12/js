"use strict";

const validInput = document.querySelector("#validation-input");

validInput.addEventListener("input", validFunct);

function validFunct(e) {
  if (
    validInput.value.length ===
    Number(validInput.getAttribute("data-length"))
  ) {
    validInput.classList.remove("invalid");
    validInput.classList.add("valid");
  } else {
    validInput.classList.remove("valid");
    validInput.classList.add("invalid");
  }
}
