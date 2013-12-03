var http = require('http');
var through = require('through');

var server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(through(function write (buf) {
      this.queue(buf.toString().toUpperCase());
    })).pipe(res);
  }
  else res.end("You haven't sent me a POST...\n");
});
server.listen(parseInt(process.argv[2]));