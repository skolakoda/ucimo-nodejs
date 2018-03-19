// https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens
const express = require('express')
const router = express.Router()
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const jwt = require('jsonwebtoken')
const config = require('./config')
const User = require('./app/models/user')

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

// api routes

router.post('/authenticate', (req, res) => {
  User.findOne({name: req.body.name}, (err, user) => {
    if (err) throw err
    if (!user) return res.json({success: false, message: 'User not found.'})
    if (user.password != req.body.password) return res.json({success: false, message: 'Wrong password.'})
    // create a token with given payload (don't pass the entire user, it has the password)
    const payload = {admin: user.admin}
    const token = jwt.sign(payload, app.get('secret'), {expiresIn: 100000})
    res.json({success: true, message: 'Enjoy your token!', token: token})
  })
})

// route middleware to verify a token (sve rute nakon ove su zaštićene)
router.use((req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token']
  if (!token) return res.status(403).send({success: false, message: 'No token.'})
  jwt.verify(token, app.get('secret'), (err, decoded) => {
    if (err) return res.json({success: false, message: 'Bad token.'})
    req.decoded = decoded // save to request for use in other routes
    next()
  })
})

router.get('/', (req, res) => res.json({message: 'Welcome to the coolest API.'}))

router.get('/users', (req, res) =>
  User.find({}, (err, users) => res.json(users))
)

app.use('/api', router)  // add prefix to router

// server

app.listen(port)
console.log('Magic happens at http://localhost:' + port)
