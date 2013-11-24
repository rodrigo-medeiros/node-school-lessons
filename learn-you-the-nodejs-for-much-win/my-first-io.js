var fs = require('fs');

var fileBuffer = fs.readFileSync(process.argv[2], 'utf8');
var numberOfLines = fileBuffer.split('\n').length - 1;

console.log(numberOfLines);