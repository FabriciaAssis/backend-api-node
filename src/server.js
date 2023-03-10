//const express = require('express')
import express from 'express'
import courseRoutes from './routes/courseRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { SERVER } from './config.js'
//const courseRoutes = require('./routes/courseRoutes')
//const userRoutes = require('./routes/userRoutes')

const app = express()
const port = SERVER.PORT

app.use(express.json())

//TODO: Tratar erro de json inválido

app.use('/course', courseRoutes)
app.use('/course', userRoutes)

app.all('*', (req, res) =>{
  res.status(404).send('404 Rota não encontrada!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})