module.exports = function (db, date, callback) {
  var total = 0;
  db.createReadStream({
    start: date
  })
    .on('error', function (err) {
      return callback(err);
    })
    .on('data', function (data) {
      total++;
    })
  .on('end', function () {
    callback(null, total);
  });
};