const fs = require('fs')

fs.watch('lorem.txt', () => {
  console.log('Promenjeno')
  // sacuvati u novom fajlu
  const ulazniTok = fs.createReadStream('lorem.txt')
  const izlazniTok = fs.createWriteStream('target.txt');
  ulazniTok.pipe(izlazniTok)
})

console.log('Cekamo da se fajl promeni')
