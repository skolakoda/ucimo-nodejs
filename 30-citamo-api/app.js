// alternative: request i axios
const https = require('https')

https
  .get('https://en.wikipedia.org/w/api.php?action=query&titles=Dada&prop=extracts&format=json', res => {
    console.log(res.statusCode)

    let body = ''
    res.on('data', chunk => {
      body += chunk
    })
    res.on('end', () => {
      console.log(body)
    })

  })
  .on('error', error => {
    console.error('Doslo je do greske prilikom povezivanja:', error)
  })
