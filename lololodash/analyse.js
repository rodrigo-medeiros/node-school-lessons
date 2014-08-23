var _ = require('lodash');

var worker = function (collection) {
  var average,
      underperform,
      overperform;

  collection = _.sortBy(collection, 'income');

  average = _.reduce(collection, function (sum, item) {
    return sum += item.income;
  }, 0) / collection.length;

  underperform = _.filter(collection, function (item) {
    return item.income <= average;
  });

  overperform = _.filter(collection, function (item) {
    return item.income > average;
  });

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  };
};

module.exports = worker;
