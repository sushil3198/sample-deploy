const express = require('express')
const app = express()

const PORT  = process.env.PORT || 4444

app.get('/',(req,res)=>{res.send("How you doin?")})
app.listen(PORT)