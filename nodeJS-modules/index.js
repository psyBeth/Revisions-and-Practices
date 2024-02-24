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
// testSingleFunction()

//? multi function call
const [test1, test2, test3] = require('./modules/module')
// test1(), test2(), test3()
test1()
test2()
test3()