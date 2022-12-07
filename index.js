const express = require('express')
require('dotenv').config()
const {motorista} = require('./models')


const app = express()
app.use(express.json())
app.get('/',async(req,res)=>{
    const p = await motorista.findAll()
    res.send(p)
})

app.listen(4000,()=>console.log('rodando...'))