var _ = require('lodash');

var worker = function (collection) {
  var result = [],
      grouped = _.groupBy(collection, 'username');

  _.forEach(grouped, function (count, name) {
    result.push({
      username: name,
      comment_count: _.size(count)
    });
  });
  return _.sortBy(result, 'comment_count').reverse();
}

module.exports = worker;
