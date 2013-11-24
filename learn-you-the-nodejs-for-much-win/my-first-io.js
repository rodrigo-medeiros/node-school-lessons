var fs = require('fs');

var fileContents = fs.readFileSync(process.argv[2], 'utf8');
var numberOfLines = fileContents.split('\n').length - 1;

console.log(numberOfLines);