console.log("***** SELECTORS *****")

document.title = "Intro for JS DOM 👩🏻‍💻"

//*===========================================
//*            GETELEMENTBYID()   (fastest method)
//*===========================================

const header = document.getElementById("header") //this is called a selector
console.log(header) //there will be null if sth wrong

//? DOM is a model of object 
//? access --> key = value
//? attribute names called by => camelCase
// header.style.backgroundColor = "green"
// header.style.color = "white" //? inline style given
header.style =
  "background-color:green; color:white; font-size:20px; font-family:Tahoma" 
  //? making this on CSS is better but this is kinda more accessible  backup

const h2 = document.getElementById("add-new-item")
console.log(h2)

//? reading the content of an element
console.log(h2.textContent) //? ADD NEW ITEM
console.log(h2.innerText) //? ADD NEW ITEM
console.log(h2.innerHTML) //? parse -> ADD NEW ITEM 

//?changing the content of an element
h2.textContent = "ADD"
h2.innerText = "ADD ITEM"
h2.innerHTML = "ADD NEW ITEM" //! not secure!! open to hackers adding their script and accessing stuff like cookies
//? innerHTML takes the code that is written
h2.innerHTML = "<p style='color:red'>DENEME</p>" //? it will show the p tags if written with innerText 

//? to change the input elements' -> value property is used 
document.getElementById("btn").value = "Submit"

const input = document.getElementById("input")
input.value = "JavaScript" //? takes JS in every start

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//! HTML Collection is a data structure by DOM
//! not an array but it's Array-Like
const lists = document.getElementsByTagName("li")
console.log(lists) //? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list] // not an array collection

console.log("SIZE:", lists.length)

//? can be iterated witf FOR LOOP
for(let li of lists){
    console.log(li.textContent)
}

//? convert from HTML Collection to array for array methods
const listArray = [...lists];
listArray.forEach((li)=> (li.style.color = "green")) //* permanent

//?Array.from() method converts it into an array
Array.from(lists).map((li)=>(li.style.backgroundColor = "yellow")) //? forEach is better here

//? EXAMPLE 
const sections = document.getElementsByTagName("section")
console.log(sections) //? HTMLCollection(2) [section.add-item, section.item-list]

sections[0].style.backgroundColor = "blue"
sections[0].style.color = "yellow" //? cannot beat the previous one in p tags (inner html priority)

sections[1].style.color = "blue"

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myLists = document.getElementsByClassName("list")
console.log(myLists) //? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]
console.log(myLists[0].innerText)

const section = document.getElementsByClassName("item-list") //? one element array
console.log(section[0])

//* ========================================
//*              QUERYSELECTOR()
//* ========================================
//! id, tag, class can be selected with Query Selector
//! it selects the first element it reads in the flow

//? to select an id (#)
console.log(document.querySelector("#header"))

//? to select a class (.)
console.log(document.querySelector(".item-list"))

//? to select a tag ()
console.log(document.querySelector("h3"))

//? CSS selector
console.log(document.querySelector("section.add-item #btn"))

console.log(document.querySelector("ul li:nth-child(4)").innerText)

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================