const fs = require('fs')

fs.watch('lorem.txt', () => {
  console.log('Fajl je promenjen')
  const sadrzaj = fs.readFileSync('lorem.txt', 'utf8')
  fs.writeFileSync('target.txt', sadrzaj.replace(/\s/g, ''))
})

console.log('Cekam da se fajl promeni')

