var http = require('http');

http.get("teamtreehouse.com/chalkers.json", function(response) {
  console.log(response.statusCode);
}).on("error", function(error) {
  console.error("Something went wrong with the connection!");
});
