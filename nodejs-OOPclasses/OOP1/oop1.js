"use strict"

//*  OBJECTS 

//? PascalCase or camelCase when an object is directly declared:
// const exampleObject = {
//     propertyName: 'value', //? attribute, field 

//     methodName: function() {
//         return 'methodName() is a method'
//     },

//     methodAlternative() {
//         return 'this is a method'
//     }
// }

// console.log(exampleObject.propertyName);
// console.log(exampleObject.methodName());

/* ---------------------------------------- */

const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: '1967',
    isAutoGear: true,
    colors: ['white', 'red'],
    details: {
        color1: 'white',
        color2: 'red',
        engineSize: 4900
    },
    startEngine: function(param1){
        console.log(param1)
        return 'Engine runned'
    },
    getDetails: function(){
        // return this
        // return this.brand + ' ' + this.model + ' ' + this.year
        return this.startEngine('hello')
    },
    arrowMethod: () => {
        //* arrow function is globalScope (not working this keyword in here)
        return this // output is {}
    }
}
// console.log(Car.brand);
// console.log(Car.colors[0]);
// console.log(Car.startEngine('value'));

// // alternative style
// console.log(Car['brand']);
// console.log( Car['colors'][0] )
// console.log( Car['details']['engineSize'] )
// console.log( Car['startEngine'](0) )

/* ----------------------------------- */
// console.log(Car.getDetails());
console.log(Car.arrowMethod());