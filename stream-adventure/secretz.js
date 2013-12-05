var crypto = require('crypto');
var tar = require('tar');
var zlib = require('zlib');
var through = require('through');

var parser = tar.Parse();
parser.on('entry', function (e) {
  if (e.type !== 'File') return;

  var hash = crypto.createHash('md5', {encoding: 'hex'});
  e.pipe(hash).pipe(through(null, function end () {
    this.queue(' ' + e.path + '\n');
  })).pipe(process.stdout);
});

var cipher = process.argv[2];
var pass = process.argv[3];

process.stdin
  .pipe(crypto.createDecipher(cipher, pass))
  .pipe(zlib.createGunzip())
  .pipe(parser);