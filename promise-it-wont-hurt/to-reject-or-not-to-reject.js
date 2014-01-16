var q = require('q'),
  defer = q.defer();

defer.promise.then(console.log, console.log);
setTimeout(defer.resolve, 300, 'I FIRED');
setTimeout(defer.reject, 300, 'I DID NOT FIRE');