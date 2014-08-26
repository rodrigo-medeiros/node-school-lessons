var url = require('url'),
    querystring = require('querystring');

var address = prompt('Enter a web address: '),
    query = url.parse(address).query,
    params = querystring.parse(query);

console.log(url.resolve(address, params.file));
