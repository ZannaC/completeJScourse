"use strict";
//// let renaming ////
let firstName = "Sara";
console.log(firstName);

firstName = "Marta";
console.log(firstName);

//// object const renaming ////
const picnicBasket = {
  cookies: 3,
  juice: 2,
  apple: 2,
};
console.log(picnicBasket);

picnicBasket["juice"] = 3;
picnicBasket.apple = 3;
console.log(picnicBasket);

//// array const renaming ////
const examResults = [6, 8, 8];
console.log(examResults);

examResults[0] = 8;
console.log(examResults);

//// Import Export ////
import shop from "./shopPicnicProducts.js";
console.log(shop("picnic"));

import { checkLS, showMessage } from "./cookies.js";
if (!checkLS()) console.log(showMessage("Problem"));

//// functions ///

document.querySelector(".out-1").onclick = function () {
  console.log("show click");
};
//// arrow function ////
document.querySelector(".out-2").onclick = () => {
  console.log("show ➡ click");
};

//// arrow without {} ////
document.querySelector(".out-3").onclick = () => console.log("show 👌 click");

const a1 = () => 5;
console.log(a1());

const b1 = () => 2 * 4;
console.log(b1());

const letPrintNum = (a, b) => a + b;
console.log(letPrintNum(10, 2));

//// spread rest ////
/// spread ...
const fruits = ["apple", "kiwis", "grapes"];
console.log(`🍏🥝🍇 ${fruits}`);
const newFruits = [...fruits, "bananas", "oranges"];
console.log(newFruits);

const juices = {
  producer: "TYMBARK",
  type: "🍊 juice ",
};
console.log(juices);

const juicesInfo = {
  ...juices,
  volume: "🧃 1.0L",
};
console.log(juicesInfo);

/// rest
const num = (...args) => args;
console.log(num(1, 2));
console.log(num(1, 2, 77, 88, 99));

// destruction
const arr = [33, 44, 55, 66, 77];
const [d1, , d2] = arr;
console.log(d1, d2);

const arrFruits = ["🍋", "🍉", "🍒"];
console.log(arrFruits);
const [l, , c] = arrFruits;
console.log(l, c);
const [, , o] = arrFruits;
console.log(o);

const { producer, volume } = juicesInfo;
console.log(producer, volume);

//// map, filter
const a = [3, 4, 5];

let b = a.map((item) => {
  console.log(item);
  return item * 3;
});
console.log(b);

const d = [];
d[0] = 5;
d[4] = 6;
let e = d.map((item) => {
  console.log(item);
  return item * 3;
});
console.log(e);

const vegetables = [];
vegetables[0] = "🍅";
vegetables[2] = "🍆";
vegetables[4] = "🥕";
let vegArray = vegetables.map((item) => {
  console.log(item);
  return item;
});
console.log(vegArray);
console.log(vegArray.length);

// Array index return //
let vegetablesIndex = vegetables.map((item, index) => {
  console.log(index);
  return index;
});
console.log(vegetablesIndex);

let vegetablesEmoji = vegetables.map((index) => {
  console.log(index);
  return "😁";
});
console.log(vegetablesEmoji);

// filter // 🛑 return TRUE of FALSE !!!!!
const f = [3, 4, 5, 6, 8, 0, 143, 45];
let i = f.filter((item) => {
  if (item > 7) return true; // true or false inside return
});
console.log(i);

let j = f.filter((item, index) => {
  if (item % 2 === 0) return true; // with 'return true' is also '0' in clg, but with 'return item' instead off it wouldn't be -> ERROR
});
console.log(j);
