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

//* ------- CREATING A NEW ELEMENT W (InnerHTML)------

const ul = document.querySelector("ul") 

ul.innerHTML += `<li id='deneme'>C++</li>
<li class="fw-bold">Java</li>
<li>Ruby</li> 
<li>Asembly</li>`
 //! this method doesn't have high security

const section3 = document.createElement("section")
document.querySelector("main").appendChild(section3)

section3.innerHTML = `
    <div class="card" style="width: 14rem;">
        <img src="https://cdn.pixabay.com/photo/2023/10/27/12/13/vineyard-8345243_1280.jpg" class="card-img-top" alt="img">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`
