var five = require('johnny-five'),
    dnode = require('dnode'),
    board = new five.Board();

board.on('ready', function () {
  var sensor = new five.Sensor('A0'),
      temperature = null;

  sensor.on('data', function () {
    temperature = ((this.value * 0.004882814) - 0.5) * 100;
  });

  var server = dnode({
    getTemperature: function (cb) {
      cb(temperature);
    }
  });

  server.listen(1337);
});
