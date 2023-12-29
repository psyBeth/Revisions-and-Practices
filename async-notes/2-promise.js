//* =================================================
//*                2- Promises
//* =================================================

//? promises show that async process is completed (succeed or not)
//? if succeed, result data will be shown as an object

//* 1- making a new promise object with new Promise() constructor
//* 2- declaring an executor function to constructor (to do the actual job)
//* 3- 2 arguments in executor function: resolve and reject
//*  resolve if succeed, reject if failed

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//! promises can be completed or can be cancelled due to some issues like errors
//! in those circumstances then() and catch() can be used (promise)

console.log("***promises***");

const req = new Promise((resolve, reject) => {
    const data = { name: "Betul", surname: "Koru"} //? mock data 
    
    const succeed = Math.floor(Math.random() * 3) //? 0 1 2 .... 9
    console.log(succeed);
    if(succeed){
        resolve(data)
    } else {
        reject("Network Error")
    }
})

req
    .then((res) => {
        //? to process successful ones: then()
        console.log(res);
        return res
    })
    .then((x) => console.log(x.name)) //? using it like a chain
    .catch((err) => document.write(err)) //? used to handle the error
    .finally(() => console.log("Works no matter what"))