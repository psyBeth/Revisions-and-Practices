//* ES-MODULES (APP.JS)
//? ES Modules came with EcmaScript 2015 version
//? Most of the browsers supports ES Model structure
//? JS codes can be parsed into different files in an easy and efficient way, allowing them to be violated when necessary
//? A variable, array, object, function, class; can be made available to other files with the "export" statement
//? The available ones can be added to the desired file with the "import" statement
//* this is out main file

import { addit } from "./calculator";
// imports are hoisted

console.log(" ***ES-Modules*** ");

console.log("TOTAL:", addit(3, 4) );