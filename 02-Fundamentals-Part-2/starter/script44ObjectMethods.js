const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Steven', 'Peter']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: true,

//     calcAge: function(birthYeah) {
//         return 2037 - birthYeah;
//     }
// };

calcAge: function() {
    console.log(this);
    return 2037 - this.birthYeah;
}
};

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));
// console.log(jonas.calcAge(jonas.birthYeah));


