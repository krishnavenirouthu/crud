const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const modelRouter = require('./routes/controller')


//const url = 'mongodb://127.0.0.1:27017/MGIT'
//const url = 'mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/cbitit3?replicaSet=m101'
const url ='mongodb+srv://krishnavenirouthu5:<password>gi@merncrud.noh1n.mongodb.net/?retryWrites=true&w=majority&appName=merncrud'
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
app.use(cors())
app.use(express.json())

app.use('/controller',modelRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
