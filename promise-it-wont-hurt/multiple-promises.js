var q = require('q'),
    defer1 = q.defer(),
    defer2 = q.defer();

function all (promise1, promise2) {
  var groupDefer = q.defer(),
      counter = 0,
      val1,
      val2;

  promise1
  .then(function (result) {
    val1 = result;
    ++counter;
    if (counter >=2) groupDefer.resolve([val1, val2]);
  })
  .then(null, groupDefer.reject)
  .done();

  promise2
  .then(function (result) {
    val2 = result;
    ++counter;
    if (counter >=2) groupDefer.resolve([val1, val2]);
  })
  .then(null, groupDefer.reject)
  .done();

  return groupDefer.promise;
}

all(defer1.promise, defer2.promise)
.then(console.log)
.done();

setTimeout(function () {
  defer1.resolve("PROMISES");
  defer2.resolve("FTW");
}, 200);