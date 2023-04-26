const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// two types of arrays
const years = new Array (1991, 1984, 2008, 2020);
console.log(years);

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends.length - 1);

friends[2] = 'Jay';
console.log(friends);
console.log(friends[friends.length - 1]);

const firstName = 'jonas';
const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//  Exercise
const calcAgeNew = function(birthYearNew) {
    return 2037 - birthYearNew;
}
const yearsNew = [1990, 1967, 2002, 2010, 2018];

const age4 = calcAgeNew(yearsNew[0]);
const age5 = calcAgeNew(yearsNew[1]);
const age6 = calcAgeNew(yearsNew[yearsNew.lenght - 1]);
console.log(age4, age5, age6);

const ages = [calcAgeNew(yearsNew[0]), calcAgeNew(yearsNew[1]), calcAgeNew(yearsNew[yearsNew.lenght - 1])];
console.log(ages)