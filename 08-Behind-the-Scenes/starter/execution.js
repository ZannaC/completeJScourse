'use strict';


const a = 'H';
const c = 'll';

first();

function first() {
  const b = 'E';

  second();

  function second() {
    const c = 'LL'; // nav redzama// do not have access to the variable c = 'LL' of an inner scope
    third();
  }

  function third() {
    const d = 'O!';
    console.log(a + b + c + d);
  }
} // console.log-> HEllO!
