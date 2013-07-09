var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var fs = require('fs');
fs.readFileSync('index.html');
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);