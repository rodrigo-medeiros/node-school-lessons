var sprintf = require('sprintf');
var	fs = require('fs');
var text = fs.readFileSync('wake.txt', 'utf8');
var lines = text.split('\n');

for (var i = 0; i < lines.length; i++) {
  if (i % 5 === 0) {
    console.log(sprintf('%3d %s', i, lines[i]));
  } else {
    console.log('    ' + lines[i]);
  }
}
