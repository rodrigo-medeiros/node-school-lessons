var _ = require('lodash');

var worker = function (collection) {
  return _.reduce(
    collection,
    function (result, obj, key) {
      result[key].article = obj.article;
      result[key].total_articles = obj.quantity;
      return result;
    },
    []
  ).reverse();
};

module.exports = worker;
