// type conversion (convert from one type to another) and coercion ///tipa pārvēršana un piespiešana /// преобразование типов и принуждение

// type conversion
// can convert to a Number, String and Boolean

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '10');
console.log('20' / '10');

let n = '1' + 1;
n = n - 1;
console.log(n);

// Truthy and Falsy Values
// 5 falsy values: 0, '' (empty string), undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all 😁");
} else {
    console.log("You should get a job 😋");
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('🙄Height is UNdefined');
}