var _ = require('lodash');

var worker = function (array) {
  return _.sortBy(array, function (item) {
    return -item.quantity;
  });
};

module.exports = worker;
