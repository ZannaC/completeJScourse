// Statements and Expressions
// whole line of code is a statement, because this does not produce a value ->
// (if (23 > 10) { const str = "23 is bigger";})
// expression - produces a value ->
// (3 + 4, 1991, true && false)


// The Conditional (Ternary) Operator

const johnAge = 15;
johnAge >= 18 ? console.log('I like to drink wine 🍷'):
console.log('I like to drink water 💧');

const drink = johnAge >=18 ? 'wine 🍷' : 'water 💧';
console.log(drink);


let drink2;
if (johnAge >=18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${johnAge >=18 ? 'wine 🍷' : 'water 💧'}`);