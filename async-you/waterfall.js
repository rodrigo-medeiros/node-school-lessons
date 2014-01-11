var fs = require('fs'),
  http = require('http'),
  async = require('async');

async.waterfall([

  function (cb) {
    fs.readFile(process.argv[2], function (err, data) {
      if (err) {
        cb(err);
      }
      cb(null, data.toString());
    });
  },

  function (url, cb) {
    var body = "";

    http.get(url, function (res) {
      res.on('data', function (chunk) {
        body += chunk.toString();
      });

      res.on('end', function () {
        cb(null, body);
      });
    }).on('error', function (err) {
      cb(err);
    });
  }
],

  function (err, result) {
    if (err) {
      return console.error(err);
    }
    console.log(result);
  }
);