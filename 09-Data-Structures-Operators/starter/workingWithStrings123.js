'use strict';

// Split and Join method

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase())); // the same result
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+'));
console.log('DEN'.padStart(25, '+'));

console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // faster method convert to String
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(1234678));
console.log(maskCreditCard(123465888154321));
console.log(maskCreditCard(2645444455522));

// Repeat method

const message2 = 'Bad weather.. All Departures Delayed...';
console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line ${'🛫'.repeat(n)}`);
};
planesInline(5);
planesInline(3);
planesInline(12);
