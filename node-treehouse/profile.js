var http = require("http");

function get(username) {
	var request = http.get("http://teamtreehouse.com/" + username + ".json", function (response) {
		var body = "";
		response.on('data', function (chunk) {
			body += chunk;
		});
		response.on('end', function () {
			if (response.statusCode === 200) {
				try {
					var profile = JSON.parse(body);
					printMessage(username, profile.badges.length, profile.points.JavaScript);
				} catch (error) {
					//Parse Error
					printError(error);
				}
			} else {
				//Status Error
				printError({
					message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"
				});
			}
		});
	});
	//Connection Error
	request.on("error", printError);
}

function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
	console.log(message);
}

function printError(error) {
	console.error(error.message);
}

module.exports.get = get;
