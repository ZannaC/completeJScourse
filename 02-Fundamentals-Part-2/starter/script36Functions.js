function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
     const applePieces = cutFruitPieces(apples);
     const orangePieces = cutFruitPieces(oranges);
     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
     return juice;
 }
 console.log(fruitProcessor(2, 3));

 // regular function expression
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

 const yearsUntilRetirementt = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
      
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirementt(1991, 'Jonas'));
console.log(yearsUntilRetirementt(1950, 'Mike'));
