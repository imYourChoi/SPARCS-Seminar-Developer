import fetch from "node-fetch";
// const express = require('express')
import express from "express";
import cors from "cors";
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog-fetch', (req, res) => {
    fetch('https://dog.ceo/api/breeds/image/random/1', {
        method: 'GET'
    })
    .then(data => {
      return data.json()
    })
    .then(result => res.send(result))
  })

app.get('/breed/:breed', (req, res) => {
    fetch('https://dog.ceo/api/breed/' + req.param("breed") + '/images/random/5', {
        method: 'GET'
    })
    .then(data => {
      return data.json()
    })
    .then(result => res.send(result))
})

app.get('/api/breeds/image/random', (req, res) => {
    fetch('https://dog.ceo/api/breeds/image/random/', {
        method: 'GET'
    })
    .then(data => {
      // console.log(data.json())
      return data.json()
    })
    .then(result => res.send(result))
    // .catch((error) => console.log(error))
})

// const appleRouter = express.Router()

// appleRouter.get('/pill', (req, res)=>{
//     res.send("pilled")
// })

// app.use('/apple', appleRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})