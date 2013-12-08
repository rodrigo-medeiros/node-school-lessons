var level = require('level');
var db = level(process.argv[2], { valueEncoding: 'json' });
var content = require(process.argv[3]);

var ops = content.map(function (row) {
  var key;
  if (row.type == 'user')
    key = row.name;
  else if (row.type == 'repo')
    key = row.user + '!' + row.name;
  return { type: 'put', key: key, value: row }
});

db.batch(ops);