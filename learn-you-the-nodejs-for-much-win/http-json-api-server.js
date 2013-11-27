var http = require('http');
var url = require('url');

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixtime (time) {
  return { unixtime : time.getTime() };
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  var time = new Date(parsedUrl.query.iso);
  var result;
console.log(request.url);
  if (/^\/api\/parsetime/.test(request.url))
    result = parsetime(time);
  else if (/^\/api\/unixtime/.test(request.url))
    result = unixtime(time);

  if (result) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(result));
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(8000);