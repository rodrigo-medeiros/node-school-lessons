var five = require('johnny-five'),
    board = new five.Board();

board.on('ready', function () {
  var photoresistor = new five.Sensor('A0'),
      led = new five.Led(9);

  photoresistor.on('data', function () {
    if (this.value > 600) {
      led.on();
    } else {
      led.off();
    }
  });
});
