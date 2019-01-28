const https = require('https') // alternative: request i axios
const url = 'https://en.wikipedia.org/w/api.php?action=query&titles=Dada&prop=extracts&format=json'

https
  .get(url, res => {
    console.log(res.statusCode)
    let sadrzaj = ''
    res.on('data', parce => sadrzaj += parce)
    res.on('end', () => console.log(sadrzaj))
  })
  .on('error', error => console.error('Doslo je do greske prilikom povezivanja:', error))
