var q = require('q'),
    defer = q.defer();

var attachTitle = function (param) {
  return "DR. " + param;
};

defer.promise.then(attachTitle).then(console.log);
defer.resolve("MANHATTAN");