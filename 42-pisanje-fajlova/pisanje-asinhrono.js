const fs = require('fs')

fs.writeFile('target.txt', 'Zdravo Svete', err => {
  if (err) throw err
  console.log('Fajl je sacuvan!')
})