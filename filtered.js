var fs = require('fs')
var path = require('path')


function zdravo(putanja, ext, callback) {
	
	fs.readdir(putanja, pretraziFolder)

	function pretraziFolder(err, data){
		if(err) {
			return callback(err);
		}

		var filtrirano = []
		for(var i in data){
			var this_ext = path.extname(data[i])
			if(this_ext == "." + ext) {
				filtrirano.push(data[i])
			}
		}
		callback(null, filtrirano)
	}	// pretraziFolder

}	// zdravo



module.exports = zdravo;