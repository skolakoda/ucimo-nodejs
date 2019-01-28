const fs = require('fs')

// pravi mini template engine
function upisiVrednosti(vrednosti, sadrzaj) {
  for(const kljuc in vrednosti) {
    sadrzaj = sadrzaj.replace('{{' + kljuc + '}}', vrednosti[kljuc])
  }
  return sadrzaj
}


function prikazi(imeSablona, vrednosti, odgovor) {
  let sadrzaj = fs.readFileSync('./views/' + imeSablona + '.html', 'utf8')
  sadrzaj = upisiVrednosti(vrednosti, sadrzaj)
  odgovor.write(sadrzaj)
}   // prikazi


module.exports.prikazi = prikazi
