'use strict';
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //   ES6;
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LM123');
createBooking('LM123', 2, 800);
createBooking('LM123', 2);
createBooking('LM123', 5);
createBooking('LM123', undefined, 1000);
