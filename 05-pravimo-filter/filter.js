var fs = require('fs');
var path = require('path');


function filter(putanja, ext, callback) {

	fs.readdir(putanja, pretraziFolder);

	function pretraziFolder(err, data){
		if(err) return callback(err);

		var filtrirano = [];
		for(var i in data){
			var thisExt = path.extname(data[i]);
			if(thisExt == "." + ext) {
				filtrirano.push(data[i]);
			}
		}
		callback(null, filtrirano);
	}	// pretraziFolder

}	// filter


module.exports = filter;
