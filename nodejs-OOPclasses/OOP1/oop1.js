"use strict"

//*  OBJECTS 

// PascalCase or camelCase when an object is directly declared:
const exampleObject = {
    propertyName: 'value', // attribute, field 

    methodName: function() {
        return 'methodName() is a method'
    },

    methodAlternative() {
        return 'this is a method'
    }
}

console.log(exampleObject.propertyName);
console.log(exampleObject.methodName());

/* ---------------------------------------- */