require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req,res) => {
    res.send('Instagram page')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at our site</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>You dont have youtube dumbass<h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})