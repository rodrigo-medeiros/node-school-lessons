var five = require('johnny-five'),
    board = five.Board();

board.on('ready', function () {
  (new five.Led(13)).strobe(1000);
});
