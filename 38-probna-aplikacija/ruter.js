const Profile = require('./profile.js')
const render = require('./render.js')
const {parse} = require('querystring')

function renderFooter(res) {
  render.prikazi('footer', {}, res)
  res.end()
}

function renderError(res, error) {
  render.prikazi('error', { errorMessage: error.message }, res)
  render.prikazi('search', {}, res)
}

function renderProfile(res, podaci) {
  const params = {
    avatarUrl: podaci.gravatar_url,
    nadimak: podaci.profile_name,
    bedzevi: podaci.badges.length,
    jsPoeni: podaci.points.JavaScript
  }
  render.prikazi('profile', params, res)
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
      render.prikazi('search', {}, res)
      renderFooter(res)
    }
  
    if (req.url.length > 1) {
      const nadimak = req.url.substring(1)
      const ovajProfil = new Profile(nadimak)
  
      ovajProfil.on('end', podaci => {
        renderProfile(res, podaci)
        renderFooter(res)
      })
  
      ovajProfil.on('error', error => {
        renderError(res, error)
        renderFooter(res)
      })
    }  
  }
}

module.exports.rutiraj = rutiraj