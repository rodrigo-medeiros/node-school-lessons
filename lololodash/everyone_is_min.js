var _ = require('lodash');

var worker = function (collection) {
  var result = {};
  result.hot = _.every(collection, function (item) {
    if (item > 19) {
      return item;
    }
  });
  result.warm = _.some(collection, function (item) {
    return item > 19;
  });
  return result;
};

module.exports = worker;
