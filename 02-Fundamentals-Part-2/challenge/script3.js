const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2; 
        return this.bmi;
 }
};

const john = {
    fullName: 'Jonh Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2; 
        return this.bmi;
 }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI ${(mark.bmi).toFixed(2)} is higher than ${john.fullName}'s BMI ${(john.bmi).toFixed(2)}!`);
    } else {
        console.log(`${john.fullName}'s BMI ${(john.bmi).toFixed(2)} is higher than ${mark.fullName}'s BMI ${(mark.bmi).toFixed(2)}!`);
    };
  
////////////////////////////////////////////////////////////
/* const markMiller = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    // BMI: 0,

calcBMI: function() {
    return this.mass / this.height ** 2;
}
};
// console.log(markMiller.calcBMI(markMiller.BMI).toFixed(2));
markMiller.BMI = markMiller.calcBMI(markMiller.BMI).toFixed(2);

const johnSmith = {
    firstName: 'Jonh',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    // BMI: 0,

calcBMI: function() {
    return this.mass / this.height ** 2;
}
};
// console.log(johnSmith.calcBMI(johnSmith.BMI).toFixed(2));
johnSmith.BMI = johnSmith.calcBMI(johnSmith.BMI).toFixed(2);
// console.log(markMiller.BMI, johnSmith.BMI);

if (markMiller.BMI > johnSmith.BMI) {
    console.log(`Mark's BMI ${markMiller.calcBMI(markMiller.BMI).toFixed(2)} is higher than John's ${johnSmith.calcBMI(johnSmith.BMI).toFixed(2)}!`);
    } else {
    console.log(`John's BMI ${johnSmith.calcBMI(johnSmith.BMI).toFixed(2)} is higher than Mark's ${markMiller.calcBMI(markMiller.BMI).toFixed(2)}!`);
    }
*/
  
