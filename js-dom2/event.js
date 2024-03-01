//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("****** EVENTS *******")

//? Selector variables
const header = document.querySelector("header")
const addButton = document.getElementById("btn")
const input = document.querySelector("#input")
const ul = document.querySelector("ul")

//? event defined with the 3rd method
//* when mouse comes to the element the function is executed
header.onmouseover = function(){
    header.style.backgroundColor = "red"
    header.style.color = "white"
}
//* when mouse is not on the element
header.onmouseout = function(){
    header.style.backgroundColor = "transparent"
    header.style.color = "black"
}

const print = () => {
    document.write("Hello world!")
}

//? onload event executes after the html and css codes renders
// window.onload = print()

//? focus on the input when window is loaded
window.addEventListener("load", () => {
    input.focus()
})

//? 4th method defined by (addEventListener)
//* call the event function when add button is clicked
addButton.addEventListener("click", () => {
    if (!input.value.trim()) {
        alert("Please add an info.")
    } else {
        const li = document.createElement("li")
        const text = document.createTextNode(input.value)
        li.appendChild(text)
        ul.appendChild(li)
        input.value = ""
        input.focus()
    }
})

//? trigger the keyup when the mouse on the input element
input.addEventListener("keyup", (event) => {
    //   console.log(event)
    //   console.log(event.target)
    //   console.log(event.target.value)
    //   console.log(event.keyCode)
    //   console.log(event.code)
  
    //?  basilan tus enter ise
    if (event.code === "Enter") {
      //? add butonun click fonkisyonu cagiriyoruz
      addButton.click()
    }
  
    if (event.code === "Backspace") {
      //TODO : Liste elemetnini en son elemani silinecek
    }
})
  
function simulateClick() {
    var clickEvent =  new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    document.body.dispatchEvent(clickEvent);
}
var intervalMilliseconds = 5000;
var clickInterval = setInterval(simulateClick, intervalMilliseconds);
var durationMilliseconds = 30000;
setTimeout(function(){
    clearInterval(clickInterval);
}, durationMilliseconds);
