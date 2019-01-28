const {createServer} = require('http')
const {createReadStream} = require('fs')

// prima dva argumenta: port i fajl, npr: node app.js 3000 lorem.txt
const port = process.argv[2] || 3000
const fajl = process.argv[3] || 'lorem.txt'

const server = createServer((zahtev, odgovor) => {
  const tok = createReadStream(fajl)
  tok.pipe(odgovor) // cita iz fajla i sluzi kao odgovor
})

server.listen(port, () => console.log('Server sluzi na http://localhost:' + port))
