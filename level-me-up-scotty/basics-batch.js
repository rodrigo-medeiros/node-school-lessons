var fs = require('fs');
var level = require('level');

var content = fs.readFileSync(process.argv[3], 'utf8').split('\n');

level(process.argv[2], function (err, db) {
  if (err)
    throw err;

  var batch = db.batch();
  content.forEach(function (line) {
    var op = line.split(',');
    if (op[0] === 'put')
      return batch.put(op[1],op[2]);
    batch.del(op[1]);
  });

  batch.write();
});
