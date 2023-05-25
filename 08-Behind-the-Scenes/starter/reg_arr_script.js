'use strict';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  // greet: () => console.log(`Hey ${this.firstName}`),
  // Don't use an arrow function as a method! Just always use a normal function expression.

  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
// It is in the global scope and therefore the arrow function here, which does not have it's own this keyword, will use the this keyword from the global scope.
// jonas.greet();

const matilda = {
  firstName: 'Matilda',
  year: 1981,
  calcAgeM: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996); //this worked because this arrow function uses the this keyword from it's parent scope. In this case, in the parent scope, the this key word is Matilda.
    };

    isMillenial();
  },

  greetM: () => {
    console.log(`Hey ${this.firstName}`);
  },
};
matilda.greetM();
matilda.calcAgeM();

// Arguments keyword is only available in regular functions
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(1, 3); //arguments keyword exists, but only in regular functions, but not in an arrow function!!
