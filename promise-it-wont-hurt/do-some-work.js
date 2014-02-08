var HTTP = require('q-io/http');

HTTP.read('http://localhost:7000/')
.then(function (id) {
  return HTTP.read('http://localhost:7001/' + id);
})
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done();