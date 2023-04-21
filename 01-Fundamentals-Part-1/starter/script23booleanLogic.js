// boolean logic: the AND, OR & NOT operators
// A: Age is >= 20 FALSE
// B: Age < 30 true
// !A (false) -> true
// A (false) AND B (true) -> false
// A (false) OR B (true) -> true
// !A (true) AND (&&) B (true) -> true
// A (true) OR (||) !B (false) -> false

const hasDriverslicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverslicense && hasGoodVision);
console.log(hasDriverslicense || hasGoodVision);
console.log(!hasDriverslicense);

// const shouldDrive = hasDriverslicense && hasGoodVision;
// if (shouldDrive) {
//     console.log('Sarah is able to drive🚕!');
// } else {
//     console.log('Someone else should drive...😮!');
// }

const isTired = false; // C
console.log(hasDriverslicense && hasGoodVision && !isTired);

const shouldDrive = hasDriverslicense && hasGoodVision && !isTired;
if (shouldDrive) {
    console.log('Sarah is able to drive 🚕!');
} else {
    console.log('Someone else should drive...😮!');
}