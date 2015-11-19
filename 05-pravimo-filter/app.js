var filter = require("./filter.js");
// prima 2 argumenta, npr: node app.js "../" "js
var putanja = process.argv[2];
var ext = process.argv[3];

filter(putanja, ext, odstampajFiltrirano);

function odstampajFiltrirano(err, data){
	if(err) return;
	for(var i in data){
		console.log(data[i]);
	}
}	// odstampajFiltrirano
