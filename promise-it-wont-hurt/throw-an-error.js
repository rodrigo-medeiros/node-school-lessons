var q = require('q');

function parsePromised(json) {
  var defer = q.defer(),
      result;

  try {
    result = JSON.parse(json);
  } catch (error) {
    defer.reject(error);
  }

  defer.resolve(result);
  return defer.promise;
}

 parsePromised(process.argv[2]).then(null, console.log);