const fs = require('fs')

let sadrzaj = fs.readFileSync('imena.txt', 'utf8')
sadrzaj += ' i Pera'

fs.writeFileSync('imena.txt', sadrzaj)
console.log('Uspesno sacuvano')
