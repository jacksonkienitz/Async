
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));


//var http = require('http').Server(app);
//var io = require('socket.io')(http);


//app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + "/public/index.html");
});

app.get("/index.js", function(request, response) {
  response.sendFile(__dirname + "/public/index.js");
});

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

http.listen(4000);


io.on("connection", function (socket) {
	console.log("briantracy -- Receive connection from websocket " + socket);

	socket.on("user input", function (text) {
		console.log("briantracy -- Receive message from client" + text);
	});
});



