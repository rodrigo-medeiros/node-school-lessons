var q = require('q'),
  defer = q.defer();

function printErr (err) {
  console.log(err.message);
}

defer.promise.then(null, printErr);
setTimeout(defer.reject, 300, new Error("REJECTED!"));