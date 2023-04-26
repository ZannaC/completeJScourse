/*  3 types of writing functions, but they work in a similar way: receive input data, transform data, output data.

 Function declaration (function that can be used before it's declared)
   function calcAge(birthYear){
   return 2037 - birthYear;
   }

 Function expression (essentially a function value stored in a variable).....cannot access before initialization, calcAge2 only after function;
   const calcAge = function (birthYear) {
   return 2037 - birthYear;
   }

 Arrow function (Great a quick one-line functions;does not get a so-called this keyword)
   const calcAge = birthYear => 2037- birthYear;

*/
function points(twoPointers, threePointers) {
  return twoPointers*2 + threePointers*3;
  }
console.log(points(1, 1));
console.log(points(7, 5));
console.log(points(38, 8));

function points1(twoPointers1, threePointers1) {
  console.log(twoPointers1*2 + threePointers1*3)
  //return twoPointers1*2 + threePointers1*3;
  }
points1(1, 1);
points1(7, 5);
points1(38, 8);

/// Arrow function
let points2 = (twoPointers2, threePointers2) => twoPointers2*2 + threePointers2*3;
points2(1, 1);
points2(7, 5);
points2(38, 8);

function lessThanOrEqualToZero(num) {
  if (num >= 0) { console.log('True');
  } else { 
    console.log('False');
  }
}
lessThanOrEqualToZero(5);
lessThanOrEqualToZero(0);
lessThanOrEqualToZero(-5);

function lessThanOrEqualToZero1(num1) {
	if(num1 >= 0)
		return true;
	else
		return false;
}
 console.log(lessThanOrEqualToZero1(5));
 console.log(lessThanOrEqualToZero1(0));
 console.log(lessThanOrEqualToZero1(-5));
 
 function lessThan100(a, b) {
	let c = a + b 
  console.log(`${a} + ${b} = ${c}`);
  if (c <= 100)
		return true;
	else
		return false;
}
 console.log(lessThan100(22, 15));
 console.log(lessThan100(83, 34));
 console.log(lessThan100(3, 77));

function  reverseNumber(n) {
  n = n + '';
   return n.split('').reverse().join('');
}
console.log(Number(reverseNumber(12345)));
console.log(Number(reverseNumber(56789)));