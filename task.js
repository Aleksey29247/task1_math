"use strict";
function solveEquation(a, b, c) {
  let arr = [2];
  let rez;
  ///b^2-4*a*c
  rez = Math.pow(b, 2) - (4 * a * c);
  if (rez > 0) {
    arr[0] = (-b + Math.sqrt(rez)) / (2 * a);
    arr[1] = (-b - Math.sqrt(rez)) / (2 * a);

  }
  if (rez == 0) {
    arr[0] = -b / (2 * a);

  }
  if (rez < 0) {
    arr = [];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
