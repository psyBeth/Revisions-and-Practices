'use strict'
console.log("this line from module");

//? single function
// const testFunction = function(){
//     console.log("this is a function");
// }
// module.exports = testFunction

module.exports = function(){
    console.log("this is a function");
}  // this only works with one single function

//? multi function

const testFunctionA = function(){
    console.log("this is a function A");
}
const testFunctionB = function(){
    console.log("this is a function B");
}
const testFunctionC = function(){
    console.log("this is a function C");
}

//thinking of something iterable
//* array
// module.exports = [
//     testFunctionA,
//     testFunctionB,
//     testFunctionC
// ]

//* object
module.exports = {
    testFunctionA: testFunctionA,
    testFunctionB: testFunctionB,
    testFunctionC: testFunctionC
}

