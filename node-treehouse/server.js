var http = require('http');
var ruter = require('./ruter.js');

http.createServer(function (zahtev, odgovor) {
	ruter.home(zahtev, odgovor);
}).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
