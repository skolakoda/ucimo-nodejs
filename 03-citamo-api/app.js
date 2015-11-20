var https = require('https');

https
    .get("https://en.wikipedia.org/w/api.php?action=query&titles=Dada&format=json", function(response) {
        console.log(response.statusCode);
        // console.log(response.headers);
    })
    .on("error", function(error) {
        console.error("Something went wrong with the connection!");
    });
