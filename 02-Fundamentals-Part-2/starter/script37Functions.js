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