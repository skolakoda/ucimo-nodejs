var citac = require("./citac");
// prima jedan argument iz komandne linije
var korisnik = process.argv[2];

if(!korisnik) korisnik = 'chalkers';
citac.citaj(korisnik);
