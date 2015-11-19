var profil = require("./profil");
var korisnici = process.argv.slice(2);

if(!korisnici.length) korisnici = ['chalkers'];

korisnici.forEach(profil.citaj);
