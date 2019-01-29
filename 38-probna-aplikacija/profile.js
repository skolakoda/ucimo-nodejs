const {EventEmitter} = require('events')
const {get} = require('https')

function ucitajProfil(username) {
  const emiter = new EventEmitter()

  get(`https://teamtreehouse.com/${username}.json`, response => {
    if (response.statusCode == 404) 
      return emiter.emit('error', {message: 'Nema trazenog korisnika'})
    let body = ''

    response
      .on('data', chunk => {
        body += chunk
        emiter.emit('data', chunk)
      })
      .on('end', () => emiter.emit('end', JSON.parse(body)))
      .on('error', error => emiter.emit('error', error))
  })
  return emiter
}

module.exports = ucitajProfil
