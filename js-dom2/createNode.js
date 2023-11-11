console.log("*****Create Node*****")
//* ------- CREATE ELEMENT (CreateElement)------

//? 1- creating a new element
const myPar = document.createElement("p")

//? 2- creating a text based element
const text = document.createTextNode("element P")

//? 3- connecting the text based element to the new element (append)
myPar.appendChild(text)

//? 4- make the new element appear on the DOM tree
const addItemSection = document.querySelector(".add-item")
addItemSection.appendChild(myPar)

console.log(myPar)
//! element.before() and element.after() connects an element to a DOM tree just like appendChild()