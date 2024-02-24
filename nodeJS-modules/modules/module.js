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
