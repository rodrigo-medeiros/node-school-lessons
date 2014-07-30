var five = require('johnny-five'),
    board = new five.Board();

board.on('ready', function () {
  var sensor = new five.Sensor('A0'),
      piezo = new five.Piezo(9),
      led = new five.Led(13),
      button = new five.Button(5),
      temperature = null,
      isButtonPressed = false;

  sensor.on('change', function () {
    temperature = ((this.value * 0.004882814) - 0.5) * 100;
    if (!isButtonPressed && temperature > 50) {
      piezo.play({
        song: [
          ['C4', 1/4]
        ]
      });
      led.strobe(0);
    } else {
      piezo.off();
      led.stop().off();
    }
  });

  button.on('press', function () {
    isButtonPressed = true;
    piezo.off();
    led.stop().off();
  });
});
