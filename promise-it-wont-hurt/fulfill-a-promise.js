var q = require('q'),
  defer = q.defer();

defer.promise.then(console.log);
setTimeout(defer.resolve, 300, "RESOLVED!");