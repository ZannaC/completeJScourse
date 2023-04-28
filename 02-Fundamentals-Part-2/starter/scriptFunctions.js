function printText() {
    console.log('Hello 😎🤝');
    }
    printText();

    /// or ///

function printT(args) {
    return args + 'to see you 😎🤝';
    }
    console.log(printT('Glad '));

function printText2(arg1, arg2) {
    console.log(arg1 + arg2);
    }
    printText2(5, 4);

    /// or ///
function printText3(arg3, arg4) {
    return arg3 + arg4;
    }
    console.log(printText3(3, 3));
    

function printText4(arg) {
    console.log(arg + 2);
    }
    printText4(3);
    
 //////////////////////////////
 
const printText5 = function() {
    console.log('Hello 😎🤝');
    }
    printText5();

const array = function(arr) {
    console.log(arr);
}
array([1, 2, 3]);

/// or ///

const array1 = function(arr) {
    return arr.shift();
}
console.log(array1([1, 2, 3]));

////////////// Arrow function /////////////

const printText6 = (text) => {
    console.log(text);
}
printText6('Hello 😎🤝');
