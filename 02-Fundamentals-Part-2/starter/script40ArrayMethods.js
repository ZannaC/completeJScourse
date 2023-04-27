const friends1 = ['Michael', 'Steven', 'Peter'];
// Add elements
// friends1.push('Sam'); Add new from the right side
const newLenght = friends1.push('Jay');
console.log(friends1);
console.log(newLenght);

friends1.unshift('John');// Add new from the left side
console.log(friends1);

// Remove elements
friends1.pop(); //removes one by one from the end
const popped = friends1.pop();
console.log(popped);
console.log(friends1);

friends1.shift(friends1);
console.log(friends1);

console.log(friends1.indexOf('Steven'));
console.log(friends1.indexOf('Bob'));

friends1.push(23);
console.log(friends1.includes('Steven'));
console.log(friends1.includes('Bob'));
console.log(friends1.includes('23'));
console.log(friends1.includes(23));

if (friends1.includes('Steven')) {
    console.log('You have a friend called Steven');
}