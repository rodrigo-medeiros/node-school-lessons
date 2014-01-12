var http = require('http'),
  async = require('async'),
  args = process.argv.slice(2);

async.map(args, function (url, done) {
  var result = "";

  http.get(url, function (res) {
    res.on('data', function (chunk) {
      result += chunk.toString();
    });

    res.on('end', function () {
      return done(null, result);
    });
  });
}, function (err, results) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});