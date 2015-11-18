var http = require('http');
var url = require('url');
var port = process.argv[2]

http.createServer(function (request, response) {
	var query = url.parse(request.url, true);
	var path = query['pathname'].split('/');
	var date = new Date(query.query.iso);

	response.writeHead(200, { 'Content-Type': 'application/json' });

	if(path[2] == 'parsetime') {
		var time = {
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
			};
	} else if(path[2] == 'unixtime') {
		var time = { unixtime: date.getTime() };
	} 
	response.write(JSON.stringify(time));
	response.end();

}).listen(port);
