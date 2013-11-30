var through = require('through');
var tr = through(function write (buf) {
        this.queue(buf.toString().toUpperCase());
    });

process.stdin.pipe(tr).pipe(process.stdout);