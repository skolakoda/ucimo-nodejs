var https = require('https');

https
    .get("https://teamtreehouse.com/chalkers.json", function(response) {
        console.log(response.statusCode);
        // console.log(response.headers);
    })
    .on("error", function(error) {
        console.error("Something went wrong with the connection!");
    });
