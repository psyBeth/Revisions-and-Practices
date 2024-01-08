//* calculator.JS

//? named export
export const name = "--Calculator--"

export const PI = 3.1415
export const primeNos = [2, 3, 5, 7, 11, 13, 17, 23]

const addit = (a, b) => a + b 
const subtrac = (a, b) => a - b 
const multip = (a, b) => a * b 
const divis = (a, b) => a / b 
export {addit, subtrac, multip, divis}

const message = () => {
    console.log("Module finished");
}
export default message //? default export method
//? only one export default can be used in one module


