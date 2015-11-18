
var filtriraj = require("./filtered.js");
var putanja = process.argv[2]
var ext = process.argv[3]

filtriraj(putanja, ext, odstampajFiltrirano)

function odstampajFiltrirano(err, data){
	if(!err) {
		for(var i in data){
			console.log(data[i])
		}
	}
}	// odstampajFiltrirano



