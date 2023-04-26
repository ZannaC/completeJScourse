    const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

    let scoreDolphins = calcAverage(44, 23, 71);
    let scoreKoalas = calcAverage(65, 54, 49);
    console.log(`Dolphins score: ${scoreDolphins}, Koalas score: ${scoreKoalas}.`);

const checkWinner = function(avgDolphins, avgKoalas){       
    if (avgDolphins >= avgKoalas*2) {
        return `Dolphins 🐬 win (${avgDolphins} vs. ${avgKoalas})!`;
    } else if (avgKoalas >= avgDolphins*2) {
        return `Koalas 🐨 win (${avgKoalas} vs. ${avgDolphins})!`;
    } else {
        return `No team wins 😪!`;
    }
}
console.log(checkWinner(scoreDolphins, scoreKoalas));

///////   Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(checkWinner(scoreDolphins,scoreKoalas));


// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let avgDolphins = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);
// console.log(`Dolphins score: ${avgDolphins}, Koalas score: ${avgKoalas}.`);

// const checkWinner = function(avgDolphins, avgKoalas){       
// if (avgDolphins >= avgKoalas*2) {
//     console.log(`Dolphins 🐬 win (${avgDolphins} vs. ${avgKoalas})!`);
// } else if (avgKoalas >= avgDolphins*2) {
//     console.log(`Koalas 🐨 win (${avgKoalas} vs. ${avgDolphins})!`);
// } else {
//     console.log(`No team wins 😪!`);
// }
// }
// checkWinner(avgDolphins, avgKoalas);

// ///////   Test 2
// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// console.log(`Dolphins score: ${avgDolphins}, Koalas score: ${avgKoalas}.`);
// checkWinner(avgDolphins, avgKoalas);

function addition(num) {
    //console.log(`${num}`);
    return ++num;
}
//addition(5);
console.log(addition(7));
