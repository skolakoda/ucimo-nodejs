var https = require('https');
var q = require('q');

var httpsObecaj = function (url) {
     var deferred = q.defer();
     https.get(url, deferred.resolve);
     return deferred.promise;
};

httpsObecaj("https://en.wikipedia.org/w/api.php?action=query&titles=Dada&format=json")
    .then(function(response) {
        console.log(response.statusCode);
    });
