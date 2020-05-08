const express = require('express')
const fs = require('fs')
const https = require('https')
const app = express()

const key = fs.readFileSync('./key.pem')
const cert = fs.readFileSync('./cert.pem')

const server = https.createServer({ key, cert }, app)

let i = 0

app.get('/', function(req, res) {
  console.log('--- server.js ->  -> ', req.query.event, i++)
  res.end()
})

server.listen(3000)
