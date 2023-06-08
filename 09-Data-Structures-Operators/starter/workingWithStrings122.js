'use strict';

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name  //////////////////////////////////////////////
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas

const passengerZ = 'zanNA';
const passengerLowerZ = passengerZ.toLowerCase();
const passengerCorrectZ =
  passengerLowerZ[0].toUpperCase() + passengerLowerZ.slice(1);
console.log(passengerCorrectZ); // Zanna
const passengerCorrectA =
  passengerLowerZ[1].toUpperCase() + passengerLowerZ.slice(2);
console.log(passengerCorrectA); // Anna

// Comparing emails  //////////////////////////////////////////////
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';
const LowerEmail = loginEmail.toLowerCase();
const trimmedEmail = LowerEmail.trim();
console.log(trimmedEmail);

// Faster method
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing  //////////////////////////////////////////////
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); //change only first one
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate')); // also replace all

// Booleans //////////////////////////////////////////////
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.includes('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have laptop, some foof and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
