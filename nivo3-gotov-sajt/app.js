var ruter = require("./ruter.js");
var http = require('http');

http.createServer(function (zahtev, odgovor) {
    ruter.prihvati(zahtev, odgovor);
}).listen(3000);

console.log('Server sluzi na 3000');
