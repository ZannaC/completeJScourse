'use strict';

/* Method 👉 this = <object that is calling the method>;
Simple function call 👉 this = undefined (in strict mode! Otherwise: window (in the browser);
Arrow functions 👉 this = <this of surrounding function (lexical this). Don't get own this!>
Event listener 👉 this = < DOM element that the handler is attached to>;
new, call, apply, bind 👉 */

console.log(this);

const newCalcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
newCalcAge(1991); // this -> undefined, because we are in strict mode. For example, in sloppy mode, it would be also the global object (in this case the window object)

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980); // this -> window in this function, because the arrow function does not get it's own this keyword.

// method inside of the Jonas object
const jonas = {
  year: 1981,
  wedYear: 2005,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    console.log(2025 - this.wedYear);
  },
};
jonas.calcAge();

const matilda = {
  year: 1987,
  wedYear: 2012,
};
matilda.calcAge = jonas.calcAge; // method borrowing (aiznemsanas metode)
matilda.calcAge(); // this keyword always points to the object that is calling the method;So here we are calling the method on Matilda, therefore this keyword will point to Matilda, which was the object, which called the method.

const f = jonas.calcAge;
f(); // undefined, because this function here is just a regular function call, it is not attached to any object.
