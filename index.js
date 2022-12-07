const express = require('express')
require('dotenv').config()
const {motorista} = require('./models')


const app = express()
app.use(express.json())
app.get('/',async(req,res)=>{
    
    res.send('ooo')
})

app.listen(4000,()=>console.log('rodando...'))