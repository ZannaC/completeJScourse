'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`; // still Jonas -> scope chain
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`; // Steven -> first in a lookup
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      // do not create new variable, but reassign the value of a variable
      output = 'NEW OUTPUT!';
    }
    console.log(millenial);
    //add(2, 3); // do not have access to the variable
    console.log(output);
  }
  // console.log(str); // do not have access to the variable

  printAge();
  // console.log(firstName);
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age); // do not have access to the variable
// printAge();  // do not have access to the variable
