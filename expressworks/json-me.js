var path = require('path');
var fs = require('fs');
var express = require('express');
var app = express();

app.get('/books', function (req, res) {
  fs.readFile(process.argv[3], function (err, data) {
    if (err) {
      throw err;
    }
    object = JSON.parse(data);
    res.send(object);
  });
});

app.listen(process.argv[2]);