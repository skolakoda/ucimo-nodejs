const fs = require('fs')

function citajPomocuObecanja(fajl) {
  return new Promise((resolve, reject) => {
    fs.readFile(fajl, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data.toString())
      }
    })
  })
}

citajPomocuObecanja('imena.txt')
  .then(text => console.log(text))
  .catch(error => console.error(error))
