var level = require('level');
var db = level(process.argv[2]);

function batchOps (str) {
  var op = str.split(',');

  db.on('ready', function () {
    if (op[0] === 'put')
      db.batch().put(op[1], op[2]).write(function () {
	console.error("put " + op[1] + " = " + op[2]);
      });
    else
      db.batch().del(op[1]).write(function () {
        console.error("delete " + op[1]);
      });
  });
}

var fs = require('fs');
fs.readFile(process.argv[3], 'utf8', function (err, data) {
  var content = data.split('\n');
  content.forEach(function (item, index, arr) {
    batchOps(item);
  });
});

