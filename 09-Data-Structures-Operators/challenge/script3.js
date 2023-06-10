"use strict";
//1. Create an array 'events' of the different game events that happened (no duplicates)

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

console.log(gameEvents.values());

// creating a Set without duplicates
// const events = new Set(gameEvents.values());

// creating an array from Set
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
); // output: An event happened, on average, every 9 minutes

//const time = [...gameEvents.keys()];
//console.log(time);// output [17, 36, 47, 61, 69, 70, 72, 76, 80, 92]

// let get last value with pop method
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
); //  output: An event happened, on average, every 9.2 minutes

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
for (const [min, event] of gameEvents) {
  // turnery operator
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}
// output  [FIRST HALF] 17: ⚽️ GOAL
//         [FIRST HALF] 36: 🔁 Substitution
//         [SECOND HALF] 47: ⚽️ GOAL
//         [SECOND HALF] 61: 🔁 Substitution
//         [SECOND HALF] 69: 🔴 Red card
//         [SECOND HALF] 70: 🔁 Substitution
//         [SECOND HALF] 72: 🔁 Substitution
//         [SECOND HALF] 76: ⚽️ GOAL
//         [SECOND HALF] 80: ⚽️ GOAL
//         [SECOND HALF] 92: 🔶 Yellow card
