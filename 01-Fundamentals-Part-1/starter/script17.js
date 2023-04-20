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
