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
