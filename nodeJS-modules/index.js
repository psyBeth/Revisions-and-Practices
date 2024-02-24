'use strict'
/*
    NODE MODULES
*/

console.log("hello FS15");
// require('./modules/module.js')
require('./modules/module.js') // no need the js at the end
//looking for an index.js in the folder
require('./modules')

//? single function call
const testSingleFunction = require('./modules/module')
testSingleFunction()