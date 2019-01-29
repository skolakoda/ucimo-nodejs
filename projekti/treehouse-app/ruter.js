const ucitajProfil = require('./profile.js')
const render = require('./render.js')
const {parse} = require('querystring')

function renderSearch(res) {
  render.prikazi('pretraga', {}, res)
  res.end()
}

function renderError(res, error) {
  render.prikazi('greska', { errorMessage: error.message }, res)
  res.end()
}

function renderProfile(res, podaci) {
  const params = {
    ...podaci,
    bedzevi: podaci.badges.length,
    jsPoeni: podaci.points.JavaScript
  }
  render.prikazi('profil', params, res)
  res.end()
}

function rutiraj(req, res) {
  const metod = req.method.toLocaleLowerCase()

  if (metod == 'post') {
    req.on('data', body => {
      const {username} = parse(body.toString()) // body je bafer
      res.writeHead(303, { 'Location': '/' + username })
      res.end()
    })
  }

  if (metod == 'get') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    render.prikazi('header', {}, res)

    if (req.url == '/') {
      renderSearch(res)
    }

    if (req.url.length > 1) {
      const username = req.url.substring(1)
      const profil = ucitajProfil(username) // ima chalkers
      profil
        .on('ucitano', podaci => renderProfile(res, podaci))
        .on('greska', error => renderError(res, error))
    }  
  }
}

module.exports.rutiraj = rutiraj