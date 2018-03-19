const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

const User = require('./app/models/user')
const config = require('./config')

router.post('/authenticate', (req, res) => {
  User.findOne({name: req.body.name}, (err, user) => {
    if (err) throw err
    if (!user) return res.json({success: false, message: 'User not found.'})
    if (user.password != req.body.password) return res.json({success: false, message: 'Wrong password.'})
    // create a token with given payload (don't pass the entire user, it has the password)
    const payload = {admin: user.admin}
    const token = jwt.sign(payload, config.secret, {expiresIn: 100000})
    res.json({success: true, message: 'Enjoy your token!', token})
  })
})

// route middleware to verify a token (sve rute nakon ove su zaštićene)
router.use((req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token']
  if (!token) return res.status(403).send({success: false, message: 'No token.'})
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) return res.json({success: false, message: 'Bad token.'})
    req.decoded = decoded // save to request for use in other routes
    next()
  })
})

router.get('/', (req, res) => res.json({message: 'Welcome to the coolest API.'}))

router.get('/users', (req, res) =>
  User.find({}, (err, users) => res.json(users))
)

module.exports = router
