// const bill = 44;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// I var
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// } 

// II var
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// III var
function calcTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) { 
         tip = bill * 0.15
    } else { 
         tip = bill * 0.2;
    }
    return tip;
  }
 calcTip(100);

 const bills = [125, 555, 44];
 console.log(`bills: ${bills}`);
//  const bill1 = newBill(bills[0]);
//  const bill2 = newBill(bills[1]);
//  const bill3 = newBill(bills[2]);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`tips: ${tips}`);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`total bill = bill + tips= ${totals}`);
