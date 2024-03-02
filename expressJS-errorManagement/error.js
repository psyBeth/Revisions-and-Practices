"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

// app.get('/', (req, res) => {
//     throw new Error('error message')
// })

// app.get('/user/:id', (req, res) => {
//     const id = req.params?.id || 0

//     try{ 

//         if(isNaN(id)){
//             throw new Error('ID is not a number', { cause: 'params.id = ' + id })
//         } else {
//             res.send({
//                 message: 'OK',
//                 id
//             })
//         }

//     } catch(err) {
    //! if we send an error object inside next, errorHandler will catch it.
     //  next(err)
//         res.send({
//             error: true,
//             message: err.message,
//         })

//     }

// });
/* ------------------------------------------------------- */

app.get('/*', (req, res) => {
    res.errorStatusCode = 404;

    throw new Error('this is an error message', { cause: 'no reason lol'})
});

/* ------------------------------------------------------- */

/* ------------------------------------------------------- */
//* ERROR HANDLER  (func in Express)
//? errorHandler is middleware and has must be four parameters. (error, request, response, next)
const errorHandler = (err, req, res, next) => {
    console.log('errorHandler is running');

    const errorStatusCode = res?.errorStatusCode || 500

    res.status(errorStatusCode).send({
          error: true,
          message: err.message,
          cause: err.cause,
          stack: err.stack,
     })
};
//? for run errorHandler call in use.
//? It must be at last middleware.
app.use(errorHandler);
/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));