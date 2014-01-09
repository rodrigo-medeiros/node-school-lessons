var path = require('path');
var express = require('express');
var app = express();

app.use(express.urlencoded());

app.post('/form', function (req, res) {
  var str = req.body.str.split('').reverse().join('');
  res.send(str);
});

app.listen(process.argv[2]);