var ndjson = require('./ndjson.js');

var first = prompt('Enter a string: '),
    second = prompt('Enter an array: ');

console.log(ndjson.parse(first));
console.log(ndjson.stringify(second));
