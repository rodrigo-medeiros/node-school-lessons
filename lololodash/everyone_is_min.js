var _ = require('lodash');

var worker = function (collection) {
  var result = {
    hot: [],
    warm: []
  };

  function isHot (collection) {
    return collection > 19;
  };

  _.forEach(collection, function (town, townname) {
    if (_.every(town, isHot)) {
      result.hot.push(townname);
    } else if (_.some(town, isHot)) {
      result.warm.push(townname);
    }
  });

  return result;
};

module.exports = worker;
