var http = require("http");
var https = require("https");


/*** VARIJABLE ***/

var domen = "https://teamtreehouse.com/";
var ceoOdgovor = "";
var korisnik = "";

/*** FUNKCIJE ***/

function citaj(ime) {
	korisnik = ime;
	https
		.get(domen + korisnik + ".json", prihvatiOdgovor)
		.on("error", javiGresku);
} // citaj


function prihvatiOdgovor(odgovor) {
	odgovor.on('data', function (deoOdgovora) {
		ceoOdgovor += deoOdgovora;
	});
	odgovor.on('end', function () {
		proveriOdgovor(odgovor, korisnik);
	});
} // prihvatiOdgovor


function proveriOdgovor(odgovor, korisnik) {
	if (odgovor.statusCode !== 200) {
		console.log("Ne mogu pročitati profil " + korisnik + ": " + http.STATUS_CODES[odgovor.statusCode]);
		return;
	}
	var korisnickiProfil = JSON.parse(ceoOdgovor);
	javiOdgovor(korisnik, korisnickiProfil.badges.length, korisnickiProfil.points.JavaScript);
} // proveriOdgovor


function javiOdgovor(korisnik, badgeCount, points) {
	var poruka = korisnik + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
	console.log(poruka);
} // javiOdgovor


function javiGresku(error) {
	console.error(error.message);
} // javiGresku


/*** IZVOZNE FUNKCIJE ***/

module.exports.citaj = citaj;
