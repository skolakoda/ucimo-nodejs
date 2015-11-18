var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var fajl_url = process.argv[3]

var server = http.createServer(function (request, response) {
	var readStream = fs.createReadStream(fajl_url);
	readStream.pipe(response);
})

server.listen(port)
