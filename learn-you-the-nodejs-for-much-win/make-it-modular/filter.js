var fs = require('fs');

module.exports = function (dirPath, fileExtension, callback) {

  fs.readdir(dirPath, function (err, list) {
    if (err) return callback(err);

    var response = [];
    list.forEach(function (file) {
      if (file.split('.').length > 1 && file.split('.').pop() === fileExtension)
        response.push(file);
    });

    callback(null, response);
  });
};