console.log("COMMON-JS");

const {addit, maxValue } = require("./app")
console.log(addit(3,5));
console.log(maxValue);

//? It uses common.js for node.js module structures.
//* exports or module.exports are used to share outside in commonjs.
//? a shared variable, function, object, etc. To use it, require() method is used.
//? Nowadays, CommonJS module structure is generally used in backend applications.