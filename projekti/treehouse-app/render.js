const fs = require('fs')

// mini template engine
function parsiraj(recnik, sadrzaj) {
  for(const kljuc in recnik) {
    sadrzaj = sadrzaj.replace('{{' + kljuc + '}}', recnik[kljuc])
  }
  return sadrzaj
}

function prikazi(imeFajla, recnik, odgovor) {
  let sadrzaj = fs.readFileSync('./views/' + imeFajla + '.html', 'utf8')
  sadrzaj = parsiraj(recnik, sadrzaj)
  odgovor.write(sadrzaj)
}

module.exports.prikazi = prikazi
