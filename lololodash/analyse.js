var _ = require('lodash');

var worker = function (collection) {
  var result = {},
      sum = _.reduce(
        collection,
        function (sum, item) {
          return sum += item.income;
        }, 0);
  result['average'] = sum / collection.length;
  return result;
};

module.exports = worker;
