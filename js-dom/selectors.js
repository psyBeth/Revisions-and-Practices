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
h2.innerHTML = "ADD NEW ITEM" //! this is not secure!! open to hackers adding their script and accessing stuff like cookies
//? innerHTML takes the code that is written
h2.innerHTML = "<p style='color:red'>DENEME</p>" //? it will show the p tags if written with innerText 

//? to change the input elements' -> value property is used 
document.getElementById("btn").value = "Submit"

const input = document.getElementById("input")
input.value = "JavaScript" //? takes JS in every start

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================