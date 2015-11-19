var http = require('http');
var ruter = require('./ruter.js');
// uvozi ruter da bi koristio njegovu funkciju rutiraj

http.createServer(function (zahtev, odgovor) {
	ruter.rutiraj(zahtev, odgovor);
}).listen(1337);

console.log('Server running at http://127.0.0.1:1337/');
