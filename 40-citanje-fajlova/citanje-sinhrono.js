const fs = require('fs')

const sadrzaj = fs.readFileSync('imena.txt', 'utf8')

console.log(sadrzaj)
