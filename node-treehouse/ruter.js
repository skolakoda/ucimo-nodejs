function rutiraj(zahtev, odgovor){

	if(zahtev.url == "/") {
		odgovor.writeHead(200, {'Content-Type': 'text/plain'});
		odgovor.write("Zaglavlje\n");
		odgovor.write("Pretraga\n");
		odgovor.end("Podnozje\n");
	} else {
		odgovor.writeHead(200, {'Content-Type': 'text/plain'});
		var ime = zahtev.url.replace('/', '').toUpperCase();
		odgovor.end("Zdravo korisnice " + ime + "\n");
	}

}	// rutiraj


module.exports.rutiraj = rutiraj;
