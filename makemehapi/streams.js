var Hapi = require('hapi'),
    path = require('path'),
    fs = require('fs'),
    ROT13Stream = require('./simple-rot13-stream');

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    var readStream = fs.createReadStream(path.join(__dirname, '/public/hapiness.txt'));
    
    readStream.on('open', function () {
      var rot13 = new ROT13Stream();
      reply(readStream.pipe(rot13));
    });

    readStream.on('error', function (err) {
      throw err;
    });
  }
});

server.start();
