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
            throw new Error(`Error: ${res.status}`); //? throwing an error in
        }
        return res.json()
    })
    .then((data) => {
        show(data)
    })
    .catch((err) => showError(err))

const show = (users) => {
    console.log(users)
    const userSection = document.getElementById("users")

    users.forEach((user) => {
        userSection.innerHTML += `
        <h1>${user.login}</h1>
        <img src="${user.avatar_url}" width="200px" alt="" />
        <p><a href="${user.html_url}" target="_blank">URL</a></p> 
    `
    })
}

const showError = (err) => {
    const userSection = document.getElementById("users")
    userSection.innerHTML = `<h1>${err}</h1>
    <img src="./img/404.png" alt="" />
    `
  }