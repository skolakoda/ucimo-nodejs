const http = require('http')
const ruter = require('./ruter.js')

http
  .createServer((zahtev, odgovor) => ruter.rutiraj(zahtev, odgovor))
  .listen(3000)

console.log('Server sluzi na 3000')
