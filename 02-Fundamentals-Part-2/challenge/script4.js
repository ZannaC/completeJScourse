const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
calcTip = bills => bills >= 50 && bills <= 300 ? bills* 0.15 : bills * 0.2;
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(`Bills: ${bills}`);
console.log(`Tips: ${tips}`);
console.log(`Totals ${totals}`);


function calcAverage([arr]) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
     sum = sum + arr[i];
}
console.log(`Sum of array: ${sum}`);
console.log(`The average of the array: ${sum / arr.length}`);
}
calcAverage([totals]);

// Jonas variant //
/*
const calcTip = function (bill) {
     return bill >= 50 && bill <= 300 ? bill* 0.15 : bill * 0.2;
}
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bill.length; i++) {
const tip = calcTip(bill[i]);
    tips.push(tip);
    totals.push(tip + bill[i]);
}  
console.log(bill, tips, totals);

const calcAverage = function(arr) {
     let sum = 0;
     for (let i = 0; i < arr.length; i++) {
       //   sum = sum + arr[i];
          sum += arr[i];
}
return sum / arr.length;
}
console.log(calcAverage(totals));
*/