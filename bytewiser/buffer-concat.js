var util = require('util');
var Transform = require('stream').Transform;

function Concat(cb) {
  Transform.call(this);
  this.cb = cb;
  this.buffers = [];
}

util.inherits(Concat, Transform);

Concat.prototype._transform = function (chunk, encoding, done) {
  this.buffers.push(chunk);
  this.push(chunk);
  done();
};

Concat.prototype._flush = function (done) {
  this.cb(this.buffers);
  done();
};

function log(buffs) {
  console.log(Buffer.concat(buffs));
}

process.stdin.pipe(new Concat(log));