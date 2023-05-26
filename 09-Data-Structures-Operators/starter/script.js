'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // destructuring (unpack it)
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

// to get first and third element in the array
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables (way to change position of elements)
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//  👉 Nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);// 2 [5, 6]
//const [, i, j] = nested;
//console.log(i, j);// 4 [5, 6]
//const [, , j] = nested;
//console.log(j); // [5, 6]
const [i, j] = nested;
console.log(i, j); // 2 4
//const [ , i, [ , m]] = nested;
//console.log(i, m);// 4 6
//const [i, , [j, k]] = nested; // 2 5 6 (individual array values)
//console.log(i, k);
// const [i, , [ , k]] = nested; // 2 6 (individual array values)
//const [, i, [k, ]] = nested; // 4 5 (individual array values)
//console.log(i, k);

//  👉 Default values
//const [p, q, r] = [8, 9];
//console.log(p, q, r); // 8 9 undefined
//const [p = 1, q = 1, r = 1] = [8, 9];
//console.log(p, q, r); // 8 9 1
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r); // 8 1 1

// openingHours: {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// },
