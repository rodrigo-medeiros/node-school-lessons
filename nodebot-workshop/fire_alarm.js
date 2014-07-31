var five = require('johnny-five'),
    board = new five.Board();

board.on('ready', function () {
  var sensor = new five.Sensor('A0'),
      piezo = new five.Piezo(9),
      led = new five.Led(13),
      button = new five.Button(5),
      temperature = null,
      wasButtonPressed = false;

  sensor.on('change', function () {
    temperature = ((this.value * 0.004882814) - 0.5) * 100;
    if (temperature > 50) {
      if (wasButtonPressed) {
        piezo.off();
        led.stop().off();
      } else {
        piezo.play({
          song: [
            ['C4', 1/4]
          ]
        });
        led.strobe(0);
      }
    } else {
      wasButtonPressed = false;
      piezo.off();
      led.stop().off();
    }
  });

  button.on('press', function () {
    wasButtonPressed = true;
    piezo.off();
    led.stop().off();
  });
});
