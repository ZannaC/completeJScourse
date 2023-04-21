const fName = 'Sam';
const hisJob = 'teacher';
const samBirthYear = 1991;
const nowYear = 2037;

const sam = "I'm " + fName + ', a ' + (nowYear - samBirthYear) + ' years old ' + hisJob + '!';
console.log(sam);

const newSam = `I'm ${fName} a ${nowYear - samBirthYear} years old ${hisJob}!`;
console.log(newSam);
console.log(`Just a regular string!`);

console.log(`Just a \n\
regular \n\
string!`);

console.log(`Just a
regular
string!`);

const personAge = 15;
const isOldEnough = personAge >= 18;

if (isOldEnough) {
    console.log('Sarah can start a driving license🚗');// emoji -> windows + (.)
}

if (personAge >= 18) {
    console.log('Sarah can start a driving license🚗');// emoji -> windows + (.)
} else {
    const yearsLeft = 18 - personAge;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😋`); 
}

const persYear = 2012;
let century;
if (persYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
