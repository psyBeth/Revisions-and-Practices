"use strict"

//* OOP & CLASSES



//* Class Decleration:
// class PascalCaseName{...}

//* Class Expression:
const PascalCaseClassName = class {
    undefinedProperty // only definition. (undefinedProperty == undefined)
    propertyName = 'value' // attribute, field 

    constructor (parameter1, parameter2 = 'defaul-value') {
        this.parameter1 = parameter1
        this.parameter2 = parameter2
    }
    methodName1(){
        return this
    }
}

//? INSTANCE = object derived from a class

const PascalCaseInstanceName = new PascalCaseClassName(0, 1)
console.log(PascalCaseInstanceName);
console.log(PascalCaseInstanceName.propertyName);
console.log(PascalCaseInstanceName.parameter1);
console.log(PascalCaseInstanceName.methodName1());
console.log(typeof PascalCaseClassName);