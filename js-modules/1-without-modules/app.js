console.log("***APP JS***");

const h1 = document.querySelector("h1")

h1.textContent = "Without Modules"

const users = ["Betul", "Irem", "Sumeyye", "Busra"]

const products = [
    {
      phone: "Iphone",
      type: "15Pro",
      price: 50000,
    },
    {
      phone: "Samsung",
      type: "S23",
      price: 40000,
    },
    {
      phone: "Huawei",
      type: "Mate60",
      price: 45000,
    },
]

console.log("Total price:", calculatePrice(products));

//? bigger the project, harder to read/improve the code, less sustainable codes without external js files

//* seperating the js files by the functions

//! add the scripts in the html file considering the priority

//! since global namespace is used, a variable name can be defined once for all files (it will give errors if a variable name used more than one file)
