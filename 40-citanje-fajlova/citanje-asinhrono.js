const fs = require('fs')

fs.readFile('imena.txt', (err, data) => {
  if (err) throw err
  console.log(data.toString())
})
