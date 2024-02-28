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

// app.post('/', (req, res) => { res.send({"message" : "POST method request"})})
// app.put('/', (req, res) => { res.send({"message" : "PUT method request"})})
// app.delete('/', (req, res) => { res.send({"message" : "DELETE method request"})})

app.all('/', app.post('/', (req, res) => { res.send({"message" : "ALL method called"})}))


app.listen(PORT, HOST, () => console.log(`server succeed on http://${HOST}:${PORT}`))