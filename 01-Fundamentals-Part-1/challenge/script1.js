let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
let bodyMassIndexMark = massMark / heightMark ** 2;
let bodyMassIndexJohn = massJohn / heightJohn ** 2;  
let markHigherBMI = bodyMassIndexMark > bodyMassIndexJohn;
console.log("Test data #1:")
console.log('Marks weights ' + massMark + ' kg'+ ' and is ' + heightMark + ' m tall.');
console.log('John weights ' + massJohn + ' kg'+ ' and is ' + heightJohn + ' m tall.');
console.log('Mark`s BMI is ' + bodyMassIndexMark + '.');
console.log('John`s BMI is ' + bodyMassIndexJohn + '.');
console.log('Mark has a higher BMI than John? - ' + markHigherBMI);
/////////////////////////////////////////////////////////
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;
bodyMassIndexMark = massMark / heightMark ** 2;
bodyMassIndexJohn = massJohn / heightJohn ** 2;
markHigherBMI = bodyMassIndexMark > bodyMassIndexJohn;  
console.log("Test data #2:")
console.log('Marks weights ' + massMark + ' kg'+ ' and is ' + heightMark + ' m tall.');
console.log('John weights ' + massJohn + ' kg'+ ' and is ' + heightJohn + ' m tall.');
console.log('Mark`s BMI is ' + bodyMassIndexMark + '.');
console.log('John`s BMI is ' + bodyMassIndexJohn + '.');
console.log('Mark has a higher BMI than John? - ' + markHigherBMI);