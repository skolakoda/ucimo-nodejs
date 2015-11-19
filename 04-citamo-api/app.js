var profil = require("./profil");
// prima jedan argument iz komandne linije
var korisnik = process.argv[2];

if(!korisnik) korisnik = 'chalkers';
profil.citaj(korisnik);
