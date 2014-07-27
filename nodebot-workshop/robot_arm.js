var five = require('johnny-five'),
    board = new five.Board();

board.on('ready', function () {
  var potentiometer = new five.Sensor('A2'),
      servo = new five.Servo(9);

  potentiometer.on('data', function () {
    var destination = five.Fn.map(
      this.value,
      0, 1023,
      0, 179
    );

    servo.to(destination);
  });
});
