var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  fs.createReadStream(process.argv[2]).pipe(response);
});

server.listen(8000);