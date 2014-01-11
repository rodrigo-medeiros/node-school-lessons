var http = require('http'),
  async = require('async');

function handleResponse(url, cb) {
  console.error(url);
  http.get(url, function (res) {
    var body = "";

    res.on('data', function (chunk) {
      body += chunk.toString();
    });

    res.on('end', function () {
      cb(null, body);
    });
  });
}

async.series({
  requestOne: function (done) {
    handleResponse(process.argv[2], done);
  },

  requestTwo: function (done) {
    handleResponse(process.argv[3], done);
  }
}, function (err, result) {
  if (err) {
    return console.error(err);
  }
  console.log(result);
});