const http = require('http')
const {rutiraj} = require('./ruter.js')	// uvozi funkciju rutiraj iz rutera

http
  .createServer((zahtev, odgovor) => rutiraj(zahtev, odgovor))
  .listen(1337)

console.log('Server running at http://127.0.0.1:1337/')
