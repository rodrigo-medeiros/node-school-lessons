var Hapi = require("hapi");

var server = Hapi.createServer("localhost", Number(process.argv[2]));

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    reply("Hello " + request.params.name);
  }
});

server.start();
