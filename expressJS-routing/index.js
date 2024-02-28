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

// app.all('/', app.post('/', (req, res) => { res.send({"message" : "ALL method called"})}))

// joker characters
// app.get('/',(req,res)=>{ res.send({ "message":"GET method called" })})
// app.get('/ab(x?)12',(req,res)=>{ res.send({ "message":"GET method called" })}) //araya tek karakter ne olursa
// app.get('/ab(x+)12',(req,res)=>{ res.send({ "message":"GET method called" })})

// app.get('/ab*',(req,res)=>{ res.send({ "message":"GET method called" })}) // sonu ne olursa olsun
// app.get('/a*b',(req,res)=>{ res.send({ "message":"GET method called" })}) // sonu ne olursa olsun

// regex
//! iki / arasında regex kabul edilir  ' kullanmayın
// regexr.com
// app.get(/abc$/ ,(req,res)=>{ res.send({ message:"end with any" })}) // sonu ne olursa olsun
// app.get(/^\/abc/ ,(req,res)=>{ res.send({ message:"start with any" })}) // başlangıç ne olursa olsun
// app.get(/\/*abc/ ,(req,res)=>{ res.send({ message:"start with any" })}) // başlangıç ne olursa olsun
// app.get(/abc/ ,(req,res)=>{ res.send({ message:"find abc  in path" })}) // başlangıç ne olursa olsun


//? url parameters

app.get('/:blogId/location/:location',(req,res)=>{ 

    // res.send({
    //      params:req.params, 
    //     blogId: req.params.blogId
    // })
    res.send({
        
        blogId: req.params.blogId,
        url:{
            protocol:req.protocol,
            domain:req.hostname,
            method:req.method,
            url:req.url,
            path:req.path,
            
            params:req.params,
            body: req.body
            
            // header:req.header,

             
        }
    })

}) // başlangıç ne olursa olsun



app.listen(PORT,HOST,()=>console.log(`Server runned http://${HOST}:${PORT}`))
