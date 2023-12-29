//*=================================================
//*               ASYNC-AWAIT
//*=================================================

//? Async-Await ECMAScript 2017
//? Promise structure with easier syntax 

//* to make a function async --> add async keyword before the actual keyword

//* await keyword makes the process wait for the response

//* turning a sync-like code into async code

//* await comes before any type of promise based funcion and stops it 
//* once the request is fulfilled and the result values ​​are returned, the code continues to run

const getNews = async () => {
    const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78err"
    const BASE_URL = "https://newsapi.org/v2/"
    const queryString = "top-headlines?country=us&category=sport&"

    // const res = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=sport&apiKey=1a1a999e0d7240a6bd2dead87bcca78e`)

    try{
        const res = await fetch(`${BASE_URL}${queryString} apiKey=${API_KEY}`)
        //? error handling
        if(!res.ok) {
            throw new Error (`Something went wrong:${res.status}`)
        }

        const data = await res.json()

        renderNews(data.articles)
        
    } catch (error) {
        const newsDiv = document.getElementById("news-div")
        newsDiv.innerHTML = `
            <h2>${error}</h2>
            <img src="./img/404.png" alt="" />
        `
    }
}  
const renderNews = (news) => {
    const newsDiv = document.getElementById("news-div")

    news.forEach((item) => {
        const {title, urlToImage, url, content} = item
        newsDiv.innerHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="card">
                <img src="${urlToImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${content}</p>
                    <a href="${url}" target="_blank" class="btn btn-primary">Detail</a>
                </div>
            </div>
        </div>
        `
    })
}

window.addEventListener("load", () => {
    getNews()
  })
  