var http = require('http');
var fs = require('fs');
// prima dva argumenta, npr: node server.js 3000 lorem.txt
var port = process.argv[2] || 3000;
var filePath = process.argv[3] || 'lorem.txt';

var server = http.createServer(function (request, response) {
	var readStream = fs.createReadStream(filePath);
	readStream.pipe(response);
});

server.listen(port);
console.log('Server sluzi na http://127.0.0.1:' + port);
