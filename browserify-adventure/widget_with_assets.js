var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');

module.exports = Widget;
inherits(Widget, EventEmitter);

function Widget () {
  if (!(this instanceof Widget)) return new Widget;
}
