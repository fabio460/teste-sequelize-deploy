const express = require('express')
require('dotenv').config()
const {Prod,roupa,Usuario,Postagem,Veiculo,motorista} = require('./models')

const app = express()
app.use(express.json())
app.get('/',async(req,res)=>{
    const p = await Usuario.findAll({
     
    });
    const v = await motorista.findAll({
        
    })
    res.send(v)
})

app.post('/create',async(req,res)=>{
    const {nome,idade} = req.body
    const p = await Usuario.create({
       nome,idade
    })
    res.json(p)
})

app.post('/createPost',async(req,res)=>{
    const {body,id_Usuario} = req.body
    const p = await Postagem.create({
       body,id_Usuario
    })
    res.json(p)
})
app.post('/createVeiculo',async(req,res)=>{
    const {nome,id_motorista} = req.body
    const p = await Veiculo.create({
       nome,id_motorista
    })
    res.json(p)
})
app.post('/createMotorista',async(req,res)=>{
    const {nome} = req.body
    const p = await motorista.create({
       nome
    })
    res.json(p)
})

app.delete('/deleteMotorista',async(req,res)=>{
    const {id} = req.body
    const d = await Veiculo.destroy({
        where: {
          id
        }
      });
    res.json(d)  
})

app.listen(4000,()=>console.log('rodando...'))