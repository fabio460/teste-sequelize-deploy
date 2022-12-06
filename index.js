const express = require('express')
require('dotenv').config()
const {Prod,roupa} = require('./models')
const app = express()
app.use(express.json())
app.get('/',async(req,res)=>{
    const p = await roupa.findAll()
    res.send(p)
})

app.post('/create',async(req,res)=>{
    const {nome} = req.body
    const p = await roupa.create({
       nome
    })
    res.json(p)
})
app.listen(4000,()=>console.log('rodando...'))