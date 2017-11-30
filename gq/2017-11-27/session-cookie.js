var http = require('http');
var uuid = require('uuid/v4');
var url = require("url");
var qs = require("querystring");
var session = {};

http.createServer(function (req, res) {
	var user;
	var sid;
	var parsedUrl = url.parse(req.url);
	var query = qs.parse(parsedUrl.query);

	if (query.sid) {
		user = session[query.sid];
	}
	if (!user) {
		user = {
			id: uuid(),
			username: "user" + new Date().getTime(),
			password: "password"
		}
		var sid = uuid();
		session[sid] = user;
		res.writeHead(301, {
			"Location": "/?sid=" + sid,
		});
	}
	res.write("hello:" + user.username);
	res.end();
}).listen(8080);
