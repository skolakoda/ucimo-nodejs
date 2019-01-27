const http = require('http')
const fs = require('fs')

// prima dva argumenta: port i fajl
// npr: node server.js 3000 lorem.txt
const port = process.argv[2] || 3000
const filePath = process.argv[3] || 'lorem.txt'

const server = http.createServer((request, response) => {
  const readStream = fs.createReadStream(filePath)
  readStream.pipe(response)
})

server.listen(port, () => console.log('Server sluzi na http://127.0.0.1:' + port))
