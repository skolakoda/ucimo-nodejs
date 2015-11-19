var fs = require('fs');

// pravi mali template engine
function upisiVrednosti(vrednosti, sadrzaj){
    for(var kljuc in vrednosti){
        sadrzaj = sadrzaj.replace("{{" + kljuc + "}}", vrednosti[kljuc]);
    }
    return sadrzaj;
}   // upisiVrednosti


function prikazi(imeSablona, vrednosti, odgovor) {
    var sadrzaj = fs.readFileSync('./views/' + imeSablona + '.html', 'utf8');
    sadrzaj = upisiVrednosti(vrednosti, sadrzaj);
    odgovor.write(sadrzaj);
}   // prikazi


module.exports.prikazi = prikazi;
