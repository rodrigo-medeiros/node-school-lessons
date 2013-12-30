var fs = require('fs');

fs.readFile(process.argv[2], function (err, data) {
  var start = 0;
  
  if (err)
    throw err;
  
  for (var i = 0; i < data.length; i++) {
    if (data[i] === 10) {
      console.log(data.slice(start, i));
      start = i + 1;
    }
  }
  console.log(data.slice(start, i));
});