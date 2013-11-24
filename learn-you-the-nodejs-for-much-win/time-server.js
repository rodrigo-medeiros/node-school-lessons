var net = require('net');
var moment = require('moment');

var server = net.createServer(function (socket) {
  var data = moment().format("YYYY-MM-DD HH:mm");
  socket.end(data + '\n');
});

server.listen(8000);