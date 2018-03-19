// https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const config = require('./config')
const User = require('./app/models/user')
const router = require('./api-routes')

// config

const port = process.env.PORT || 8080
mongoose.connect(config.database)
app.set('secret', config.secret)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// basic routes

app.get('/', (req, res) => res.send(`Hello! The API is at http://localhost:${port}/api`))

app.get('/setup', (req, res) => {
  const nick = new User({
    name: 'Nick Cerminara',
    password: 'password',
    admin: true
  })
  nick.save(err => {
    if (err) throw err
    res.json({success: true, message: 'User saved successfully.'})
  })
})

app.use('/api', router)  // add api prefix

// server

app.listen(port)
console.log('Magic happens at http://localhost:' + port)
