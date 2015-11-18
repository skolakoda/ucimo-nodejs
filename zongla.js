
var http = require('http')
var svi_urlovi = []
var svi_odgovori = []

for(var i=2; i<5; i++) {
	var ovaj_url = process.argv[i];
	svi_urlovi.push(ovaj_url)
}

for(var i = 0; i < svi_urlovi.length; i++) {
	prihvatiIndex(svi_urlovi, i)
}


function prihvatiIndex(svi_urlovi, index){
	http.get(svi_urlovi[i], function obradiOdgovor(odgovor) {
	    var sadrzaj = '';

	    odgovor.on('data', function(data) {
	        sadrzaj += data;
	    });

	    odgovor.on('end', function() {
	    	svi_odgovori.splice(index, 0, sadrzaj);
			proveriUkupno()
	    });
	})	
}	// prihvatiIndex


function proveriUkupno(){
    if(svi_odgovori.length == 3) {
		for(var i = 0; i < svi_odgovori.length; i++) {
			console.log(svi_odgovori[i])
		}
    }
} // proveriUkupno