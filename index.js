const express = require('express')
require('dotenv').config()
const {Veiculo,motorista} = require('./models')


const app = express()
app.use(express.json())
app.get('/',async(req,res)=>{
    const v = await motorista.findAll()
    res.send(v)
})


app.listen(4000,()=>console.log('rodando...'))