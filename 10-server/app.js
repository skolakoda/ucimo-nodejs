const http = require('http')
const fs = require('fs')
const port = 8000

const sadrzaj = fs.readFileSync('lorem.txt', 'utf8')

const server = http.createServer((request, response) => response.end(sadrzaj))

server.listen(port, () => console.log('Server sluzi na http://localhost:' + port))
