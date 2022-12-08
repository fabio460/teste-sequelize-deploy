const express = require('express')
require('dotenv').config()
const motorista = require('./models/motorista')
const veiculo = require('./models/veiculo')


const app = express()
app.use(express.json())
app.get('/',async(req,res)=>{
    const v = await veiculo.findAll()
    const p = await motorista.findAll()
    res.send(v)
})

app.listen(4000,()=>console.log('rodando...'))