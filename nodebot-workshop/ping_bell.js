var five = require('johnny-five'),
    board = new five.Board(),
    dgram = require('dgram');

board.on('ready', function () {
  var piezo = new five.Piezo(8),
      server = dgram.createSocket('udp4');

  server.on('message', function () {
    piezo.play({
      song: [
        ['C4', 1/4]
      ]
    });
  });

  server.bind(1337, 'localhost');
});
