const express = require('express')
require('dotenv').config()
const motorista = require('./models/motorista')
const veiculo = require('./models/veiculo')


const app = express()
app.use(express.json())
app.get('/',async(req,res)=>{
    const v = await veiculo.findAll()
    const p = await motorista.findAll({
        include:veiculo
    })
    res.send(p)
})

app.post('/create',async (req,res)=>{
   const {nome,id_motorista} = req.body 
   const r = await veiculo.create({
     nome,id_motorista
   })
   res.send(r)
})
app.listen(4000,()=>console.log('rodando...'))