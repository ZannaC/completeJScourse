'use strict';
// Hoisting: make some types of variables accessible in the code before they are actually declared. Variables lifted to the top of their scope.
// We can't use function expressions before we write them in the code unlike function declarations.
// Temporal Dead Zone (TDZ)

// Variables
/* console.log(me);
console.log(job);
console.log(year); */

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// The only function that can use before declaring it -> function declaration.

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10; // because of hosting doesn`t see this variable declaration;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

const numProd = 10;
if (numProd >= 10) fullShopCart();

function fullShopCart() {
  console.log('Shopping cart is full!');
}

// declare all types of functions first and use them after the declaration

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
