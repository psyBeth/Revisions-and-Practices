//*========================================
//*             3 - FETCH API
//*========================================

//? used to bring data from outside
//? processing the network requests and managing the responses
//? most used async method 

//? fetch() function requires the source parameter that we wanted to bring
//? gives a response to this promise request

console.log("FETCH");
let veri = "helloworld"
fetch("https://api.github.com/user")
    .then((res) => {
        if (!res.ok) {
            //? WE need to catch the error in fetch API
            throw new Error(`Error: ${res.status}`) //? throwing an error in
        }
        return res.json()
    })
    .then((data) => {
        show(data)
    })
    .catch((err) => showError(err))

