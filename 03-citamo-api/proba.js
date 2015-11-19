var http = require('http');

http
    .get("http://pozorista.net/php/funkcije.php?sve_predstave=1", function(response) {
        console.log(response.statusCode);
        // console.log(response.headers);
    })
    .on("error", function(error) {
        console.error("Something went wrong with the connection!");
    });
