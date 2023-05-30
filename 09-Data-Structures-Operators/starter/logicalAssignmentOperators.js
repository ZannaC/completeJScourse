'use strict';

////////////////////////////////////////////////////////////////////
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
  menu: 'A la carte',
};

const rest2 = {
  name: 'La Piiazza',
  owner: 'Giovanni Rossi',
};

// 👉 OR assignment operator ////////
// rest1.numGuests = rest1.numGuests || 10; // below the same output
// rest2.numGuests = rest2.numGuests || 10; // below the same output
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// 👉 Nullish assignment operator (null or undefined) //////
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANONIMOUS>';
rest2.owner = rest2.owner && '<ANONIMOUS>';

rest2.menu ??= 'Vegetarian';
console.log(rest2);
console.log(rest1);
rest1.menu = rest1.menu && 'Buffet';
console.log(rest1);

rest1.owner &&= '<ANONIMOUS>';
rest2.owner &&= '<ANONIMOUS>';
console.log(rest1);
console.log(rest2);
