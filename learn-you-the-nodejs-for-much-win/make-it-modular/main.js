var filter = require('./filter');

filter(process.argv[2], process.argv[3], function (err, content) {
  if (err)
    return console.error("There was an error processing the operation: ", err);

  else
    content.forEach(function (item) {
      console.log(item);
    });
});