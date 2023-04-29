// console.log('Lifting weight repetiytion 1 🏋️‍♂️');
// console.log('Lifting weight repetiytion 2 🏋️‍♂️');
// console.log('Lifting weight repetiytion 3 🏋️‍♂️');
// console.log('Lifting weight repetiytion 4 🏋️‍♂️');
// console.log('Lifting weight repetiytion 5 🏋️‍♂️');

// for loop keeps running while conditions is TRUE
for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weight repetiytion ${rep} 🏋️‍♂️`);
}

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Steven', 'Peter'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    /// Filling types array
    // types[i] = typeof jonas[i]; // result is the same
    types.push(typeof jonas[i]);// result is the same

}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

/// continue and break
console.log('--- only strings ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

/// break is to completely terminate the whole loop
console.log('--- break with number ---');
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

