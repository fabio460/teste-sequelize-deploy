const express = require('express')
require('dotenv').config()



const app = express()
app.use(express.json())
app.get('/',async(req,res)=>{
    
    res.send('ok')
})

app.listen(4000,()=>console.log('rodando...'))