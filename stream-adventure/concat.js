var concat = require('concat-stream');

process.stdin.pipe(concat(function (buf) {
    var str = buf.toString().split('').reverse().join('');
    console.log(str);
  }))
;