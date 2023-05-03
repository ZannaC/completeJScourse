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

function lessThan100(a, b) {
  return a + b < 100;
}
console.log(lessThan100(50, 50));

///// arguments.length //////
function numArgs() {
  return arguments.length;
}
console.log(numArgs());

function numArgs2() {
  return arguments.length;
}
console.log(numArgs(5, 6, 7));

function numArgs3() {
  return arguments.length;
}
console.log(numArgs3(true, false));

function numArgs4() {
  return arguments.length;
}
console.log(numArgs4({}));

///// Boolean to String Conversion ////////

function boolToString(flag) {
  console.log(typeof flag);
  return flag.toString();
}
///// Boolean Using the "&&" Operator ////////
function and(a, b) {
  return a && b;
}
console.log(and(true, true));

let andArrowFunc = (c, d) => c && d;
console.log(andArrowFunc(true, false));

// 1. No arguments object in arrow functions //
function print() {
  console.log(arguments);
}
print("hello", 5, true);

/*const printArrow = () => {
  console.log(arguments);
};
printArrow("hello", 400, false);

Now we have a reference error: arguments is not defined. That's because the arguments variable does not exist in arrow functions.*/

// 2.  Arrow functions do not create their own this binding //
const obj = {
  name: "deeecode",
  age: 200,
  print: function () {
    console.log(this);
  },
};
obj.print();

const obj1 = {
  name: "deeecode",
  age: 200,
  print: () => {
    console.log(this);
  },
};
obj1.print();
// 3. Arrow functions cannot be used as constructors //
class Animal {
  constructor(name, numOfLegs) {
    this.name = name;
    this.numOfLegs = numOfLegs;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

const Dog = new Animal("Bingo", 4);
const Bird = new Animal("Steer", 2);

Dog.sayName();
Bird.sayName();
// Arrow //
/* class Animal {
  constructor = (name, numOfLegs) => {
    this.name = name
    this.numOfLegs = numOfLegs
  }
  
  sayName() {
    console.log(`My name is ${this.name}`)
  }
}
SyntaxError: Classes may not have a field named 'constructor'. 
But, we can use arrow functions for the methods in the class without getting errors. For example: */
class AnimalArrow {
  constructor(name, numOfLegs) {
    this.name = name;
    this.numOfLegs = numOfLegs;
  }

  sayName = () => {
    console.log(`My name is ${this.name}`);
  };
}

const Cat = new AnimalArrow("Sam", 4);

Cat.sayName();

// 4. Arrow functions cannot be declared
/* When it comes to functions, you need to understand function declaration and function expression.

Function declarations involve the function keyword and a name for the function. For example: */
function printHello() {
  console.log(printHello("hello"));
}
// printHello is a declared function, but in case below printHello is not a declared function. We have an anonymous function (not named) on the right side of the assignment operator. This function is a function expression, which is assigned to the printHello variable. //
const printHello1 = function () {
  console.log("hello");
};

// 5 Arrow functions cannot be accessed before initialization //

printName()

console.log("hello")

function printName() {
  console.log("i am dillion")
}
/* But not all kinds of functions can be accessed before initialization. All functions and variables in JavaScript are hoisted, but only declared functions can be accessed before initialization.

Here's an example with an arrow function: 

printNameArrow()

console.log("hello")

const printNameArrow = () => {
  console.log("i am dillion")
}

Running this code, you get an error: ReferenceError: Cannot access 'printName' before initialization. */