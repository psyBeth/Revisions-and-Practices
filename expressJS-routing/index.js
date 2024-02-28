'use strict'
/*
    Expressjs Routing
*/
require('dotenv').config(); 


const PORT=process.env?.PORT || 8000
const HOST=process.env?.HOST || "127.0.0.1"

app.listen(8000,()=>console.log(`server runned : http://${HOST}:${PORT}`))
