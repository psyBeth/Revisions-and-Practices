//* ES-MODULES (APP.JS)
//? ES Modules came with EcmaScript 2015 version
//? Most of the browsers supports ES Model structure
//? JS codes can be parsed into different files in an easy and efficient way, allowing them to be violated when necessary
//? A variable, array, object, function, class; can be made available to other files with the "export" statement
//? The available ones can be added to the desired file with the "import" statement
//* this is out main file

import { name, PI as pi } from "./calculator.js";
console.log(name);
console.log(pi * 10 * 10);

import { addit, subtrac, multip, divis } from "./calculator.js";
// imports are hoisted

console.log("TOTAL:", addit(3, 4) );

//? use regular paranthesis when using variable with export default (importing)
//? any name can be called without using "as" in export default
import message from "./calculator.js";
message()

//! 1- Imports are hoisted so they can be added anywhere, but best practice is to add them at the top.

//! 2- Using top-level this does not show the window object.