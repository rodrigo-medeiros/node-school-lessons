var level = require('level');
var db = level(process.argv[2]);

function fetchNextItem (i) {
  var key = 'gibberish' + i;
  db.get(key, function (err, data) {
    if (err) {
      if (!err.notFound)
        throw err;
    } else
      console.log(key + '=' + data);

    if (i < 100)
      fetchNextItem(i + 1);
  });
}

fetchNextItem(0);
