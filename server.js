const express = require('express')
const app = express()

const PORT  = process.env.port || 4444

app.get('/',(req,res)=>{res.send("Hello World")})
app.listen(PORT)