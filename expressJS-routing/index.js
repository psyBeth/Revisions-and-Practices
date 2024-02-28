'use strict'
/*
    Expressjs Routing
*/
// $ npm i 
// or npm i express dotenv

require('dotenv').config(); 


const PORT=process.env?.PORT || 8000
const HOST=process.env?.HOST || "127.0.0.1"

const express = require('express');
const app = express();  // created a server on express

app.get('/', (req, res) => {
    // res.write("hello")
    // res.end()

    // res.write(JSON.stringify({
    //     message : "hello"
    // }))
    // res.end()

    // console.log("hello world!");
    // res.send()

    res.send({
        "message" : "hello"
    })
//     res.send('hello') // no send more than once
 })

app.listen(PORT, HOST, () => console.log(`server succeed on http://${HOST}:${PORT}`))