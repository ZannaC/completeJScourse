// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const dolphinsScore = (97 + 112 + 101)/3;
const koalasScore = (109 + 95 + 106)/3;
console.log(`Dolphins team average score is: ${dolphinsScore.toFixed(0)} and Koalas team average score is: ${koalasScore.toFixed(0)}.`);

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log('The Dolphins 🐬 wins a trophy 🏆!');
} else if (dolphinsScore < koalasScore && koalasScore >= 100) {
    console.log('The Koalas 🐨 wins a trophy 🏆!');
} else if (dolphinsScore === koalasScore && dolphinsScore >=100 && koalasScore >=100) {
    console.log('The average score is the same, draw 🏆!');
} else {
    console.log('Nobody won! 😥');
}


