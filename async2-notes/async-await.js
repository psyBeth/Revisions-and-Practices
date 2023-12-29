//*=================================================
//*               ASYNC-AWAIT
//*=================================================

//? Async-Await ECMAScript 2017
//? Promise structure with easier syntax 

//* to make a function async --> add async keyword before the actual keyword

//* await keyword makes the process wait for the response

//* turning a sync-like code into async code

//* await comes before any type of promise based funcion and stops it 
//* Once the request is fulfilled and the result values ​​are returned, the code continues to run

const getNews = async () => {
    const API_KEY = "1a1a999e0d7240a6bd2dead87bcca78err"
    const BASE_URL = "https://newsapi.org/v2/"
    const queryString = "top-headlines?country=us&category=sport&"

    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&category=sport&apiKey=1a1a999e0d7240a6bd2dead87bcca78e`)
}  