var http = require('http');

function citaj(url){
	var zahtev = http.get(url, function(odgovor){
		var celina = "";
		odgovor.on('data', function(deo){
			celina += deo
		});
		odgovor.on('end', function(){
			// ako je stranica nadjena
			if(odgovor.statusCode === 200) {
				celina = JSON.parse(celina)
				console.log(celina)
			} else {
				stampajGresku({message: "Ne mozemo da obradimo sledeci url: " + url + " iz razloga (" + http.STATUS_CODES[odgovor.statusCode] + ")"})
			}

		})
	});
	zahtev.on('error', stampajGresku)
}	// citaj

function stampajGresku(error){
	console.error("Doslo je do greske: " + error.message)
}	// stampajGresku


module.exports.citaj = citaj;
