var fs = require('fs');

var dirPath = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(dirPath, function (err, list) {
  list.forEach(function (file) {
    if (file.split('.').pop() === fileExtension)
      console.log(file);
  });
});