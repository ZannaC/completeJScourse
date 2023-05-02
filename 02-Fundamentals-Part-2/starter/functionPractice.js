"use strict";
function calcAge1(birthYear) {
  // const age = 2037 - birthYear;
  // return age;
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// function expression (cannot access before initialization, calcAge2 only after function)
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

/// Arrow function (does not get a so-called this keyword)
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// 1 var//
function circuitPower(voltage, current) {
  return voltage * current;
}
console.log(circuitPower(230, 10));

// 2 var //
const circuitPower1 = function (voltage1, current1) {
  return voltage1 * current1;
};
console.log(circuitPower1(230, 10));

// 3 var //
const circuitPower2 = (voltage2, current2) => voltage2 * current2;
console.log(circuitPower2(230, 10));

function animals(chickens, cows, pigs) {
  return chickens * 2 + (cows + pigs) * 4;
}
console.log(animals(2, 3, 5));

const animals1 = function (chickens1, cows1, pigs1) {
  return chickens1 * 2 + (cows1 + pigs1) * 4;
};
console.log(animals1(2, 3, 5));

const animals3 = (chickens3, cows3, pigs3) =>
  chickens3 * 2 + (cows3 + pigs3) * 4;
console.log(animals1(2, 3, 5));

function printArray(number) {
  var newArray = [];

  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}
console.log(printArray(3));

function isSeven(x) {
  return x === 7 ? true : false;
}
console.log(isSeven(7));

function isNine(x) {
  return x === "9" ? true : false;
}
console.log(isNine(9));

function sumPolygon(n) {
  return (n - 2) * 180;
}
console.log(sumPolygon(6));
