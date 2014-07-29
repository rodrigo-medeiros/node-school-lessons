var five = require('johnny-five'),
    board = new five.Board();

board.on('ready', function () {
  var sensor = new board.Sensor('A0'),
      piezo = new board.Piezo(9),
      led = new board.Led(13),
      button = new board.Button(5);


