'use strict'; // turned on strict mode will help to avoid bugs (typo in variable), reserved words

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

//const interface = 'Audio';
//const private = 534;

// FUNCTIONS

function logger() {
    // function body
    console.log('My name is Zanna');
}
// calling / running / invoking (izsauksanas) function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
   // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}


const appleJuice = fruitProcessor(5, 0); // 5 and 0 are arguments
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
////////////////////////
function calculator(num1, num2) {
    const result = num1 + num2;
    return result;
}

const resultOfSum = calculator(12, 3);
console.log(resultOfSum);

const num = Number ('23');
/////////////////////
// function declaration (can access before initialization)
function calcAge1(birthYear){
// const age = 2037 - birthYear;
// return age;
return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression (cannot access before initialization, calcAge2 only after function)
const calcAge2 = function (birthYear) {
return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);

/// Arrow function (does not get a so-called this keyword)
const calcAge3 = birthYear => 2037- birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
   // return retirement; 
   return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
