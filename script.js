"use strict";

/// Variable
let number = document.querySelector("#number");
const buttton1 = document.querySelector("#b1"); // +
const buttton2 = document.querySelector("#b2"); // reset
const buttton3 = document.querySelector("#b3"); // -

let count = 0;

const updateDisplay = function () {
  number.innerHTML = count;
};

// addition
buttton1.addEventListener("click", () => {
  count++;
  updateDisplay();
});

// subtraction
buttton3.addEventListener("click", () => {
  count--;
  updateDisplay();
});

// Reset/back to zero
buttton2.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
