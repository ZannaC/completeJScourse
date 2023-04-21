let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let bodyMassIndexMark = massMark / heightMark ** 2;
let bodyMassIndexJohn = massJohn / heightJohn ** 2;  
let markHigherBMI = bodyMassIndexMark > bodyMassIndexJohn;
console.log(`BMI Mark: ${bodyMassIndexMark}, BMI John: ${bodyMassIndexJohn};`);

if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

///////////////////////////////////////////////////////
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;
bodyMassIndexMark = massMark / heightMark ** 2;
bodyMassIndexJohn = massJohn / heightJohn ** 2;
markHigherBMI = bodyMassIndexMark > bodyMassIndexJohn;

//// or if (bodyMassIndexMark > bodyMassIndexJohn) { ...
if (markHigherBMI) {
    console.log(`Mark's
    BMI (${bodyMassIndexMark.toFixed(2)}) is higher than John's (${bodyMassIndexJohn.toFixed(2)})!`);
} else {
    console.log(`Mark's BMI (${bodyMassIndexMark.toFixed(2)}) is lower than John's (${bodyMassIndexJohn.toFixed(2)})!`);
}

