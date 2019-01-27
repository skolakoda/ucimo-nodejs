const http = require('http')
const fs = require('fs')
const port = 8000

const imena = fs.readFileSync('imena.txt', 'utf8')

const server = http.createServer((request, response) => {
  response.end(imena)
})

server.listen(port, '127.0.0.1', () => {
  console.log('Server je pokrenut na adresi http://127.0.0.1:' + port)
})
