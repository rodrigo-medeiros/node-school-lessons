var through = require('through');
var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(function write (buf) {
      this.queue(buf.toString().toUpperCase());
    })).pipe(res);
  }
  else res.end("You haven't sent me a POST...");
});
server.listen(process.argv[2]);
