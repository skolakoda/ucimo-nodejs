var http = require('http');

function stampajGresku(error){
	console.error("Doslo je do greske: " + error.message)
}

function dajPodatke(url){
	var zahtev = http.get(url, function(odgovor){
		var celina = "";
		odgovor.on('data', function(deo){
			celina += deo
		});
		odgovor.on('end', function(){

			// ako je stranica nadjena
			if(odgovor.statusCode === 200) {
				try {
					celina = JSON.parse(celina)
					console.log(celina)
				} catch (error) {
					// greska u parsiranju
					stampajGresku(error);
				}
			} else {
				// stranica nije nadjena
				stampajGresku({message: "Ne mozemo da obradimo sledeci url: " + url + " iz razloga (" + http.STATUS_CODES[odgovor.statusCode] + ")"})
			}	// ako je stranica nadjena

		})
	});

	// greska u konekciji
	zahtev.on('error', stampajGresku)
}


module.exports.dajPodatke = dajPodatke;
