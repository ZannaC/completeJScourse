const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2') //
// destructuring
const [players1, players2] = game.players;
console.log(`Players1 team ⚽ ${players1}`);
console.log(`Players2 team ⚽ ${players2}`);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players //

const gk1 = players1[0];
console.log(`Team 1 goalkeeper 👉 ${gk1}`);
// const fieldPlayers = [
//   players1[1],
//   players1[2],
//   players1[3],
//   players1[4],
//   players1[5],
//   players1[6],
//   players1[7],
//   players1[8],
//   players1[9],
//   players1[10],
// ];
// console.log(`10 field players of team1: ${fieldPlayers}`); // the same result like below

const [, ...fieldPlayers1] = players1;
console.log(`10 field players of team1: ${fieldPlayers1}`);

// rest syntax
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players) //
const allPlayers = [...players1, ...players2];

console.log(`All players of both teams 🤝 ${allPlayers}`);

// for of Loop
for (const [i, allPlayers] of game.players.entries()) {
  console.log(`${i + 1}: ${allPlayers}`);
}

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic' //

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(`Team1 with 🏃‍♂️🏃‍♀️🏃‍♀️ new players 👉 ${players1Final}`);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2') //

// nested destructuring
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// const { team1 } = game.odds;
// console.log(`Team1 odds: ${team1}`);

// const { x } = game.odds;
// console.log(`draw: ${x}`);

// const { team2 } = game.odds;
// console.log(`Team2 odds: ${team2}`);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in) //

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.

team1 < team2 && console.log("Team 1 is more likely to win");

//////////// Coding Challenge #2 ///////////////////
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
///// with destructuring /////////
// 👉👀 in the array we use the entries method to get the entries of the array
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}
/* output 
Goal 1: Lewandowski
Goal 2: Gnarby
Goal 3: Lewandowski
Goal 4: Hummels */

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 1.variant //////////////////
// getting values of object
const values = Object.values(game.odds);
console.log(values);
// output  [1.33, 3.25, 6.5]

// now simply loop over the array to get value
values.forEach((value) => {
  console.log(value);
});
// output 1.33 3.25 6.5

function arrayValues(array) {
  let sum = 0;
  array.forEach((value) => {
    sum += value / values.length;
  });
  return sum;
}
const averageOdds = arrayValues(values);
console.log(averageOdds.toFixed(2));

// 2.variant //////////////////
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25 Odd of victory Borrussia Dortmund: 6.5 Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names.
const printOdds = Object.values(game.odds);
console.log(printOdds);
console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);
console.log(`Odd of draw: ${game.odds.x}`);

// 👉👀 in the object we have to use the object.entries and then pass into the functions
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
// output {Lewandowski: 2, Gnarby: 1, Hummels: 1}
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
