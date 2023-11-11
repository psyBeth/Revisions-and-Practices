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
addItemSection.before(myPar) //* above the add item header

const reactLi = document.querySelector("ul li:nth-child(4)")
reactLi.after(myPar) //* under the react (<li>)

//* ------- DECLARE ID, CLASS, ETC ------
//? 1st method
myPar.id = "paragraf"
myPar.className = "red center"
myPar.name = "par"
myPar.type = "button"

//? 2nd method (setAttribute)
myPar.setAttribute("id", "deneme")
myPar.setAttribute("type", "button")
myPar.setAttribute("class", "bg-warning border border-danger border-3")

//? 3rd method (classList)
myPar.classList.add("text-center")

console.log(myPar.classList.contains("bg-warning"))

if (myPar.classList.contains("border-danger")) {
    myPar.classList.remove("border-danger")
    myPar.classList.add("border-primary")
}

//? toggle method adds a class if that class hasn't been added before
//? toggle method removes the class if that specific class has been added before
myPar.classList.toggle("text-danger")

