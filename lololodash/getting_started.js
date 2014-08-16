var _ = require('lodash');

var worker = function (collection) {
  return _.where(collection, {'active': true});
}

module.exports = worker;
