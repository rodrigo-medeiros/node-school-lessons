var _ = require('lodash');

var worker = function (collection) {
  return _.forEach(collection, function (item) {
    if (item.population > 1.0) {
      return item.size = 'big';
    } else if (item.population > 0.5) {
      return item.size = 'med';
    } else {
      return item.size = 'small';
    }
  });
};

module.exports = worker;
