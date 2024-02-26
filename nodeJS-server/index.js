'use strict'
/*
    NODE JS SERVER 
*/
// console.log("wellcome!");

require('dotenv').config();

// const PORT = process.env.PORT || 8000
// const HOST = process.env.HOST || "127.0.0.1"
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || "127.0.0.1"

const http = require('node:http')

// http.createServer((param1, param2) => {...})
// http.createServer((request, response) => {...})
// http.createServer((req, res) => {

//     res.end("<h1>wellcome to my first node.js server</h1>")

// }).listen(8000, () => console.log(`server successfully runs : http://${HOST}:${PORT}`)); // http://localhost:8000

const app = http.createServer((req, res) => {
    console.log(req.method);
    res.end("<h1>wellcome to my first node.js server</h1>")
});
app.listen(8000, () => console.log(`server successfully runs : http://${HOST}:${PORT}`));